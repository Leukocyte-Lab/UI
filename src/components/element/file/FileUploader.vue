<script setup lang="ts">
import { map, pick } from 'lodash-es';
import { ref } from 'vue';
import { Icon } from '@iconify/vue/offline';
import { computedEager, useDropZone, useFileDialog, useResizeObserver } from '@vueuse/core';

import ButtonBox from '@/components/element/button/ButtonBox.vue';
import CardBox from '@/components/element/card/CardBox.vue';
import ProgressBar from '@/components/element/progress/ProgressBar.vue';
import { signal } from '@/shared/libs/signal';
import String$ from '@/shared/libs/string';

import type { FileUploader } from '@/components/element/file/FileUploader.model';

const props = withDefaults(defineProps<FileUploader.Props>(), {
  accept: '*',
  multiple: false,
  disabled: false,
  required: false,
  icon: 'fa6-solid:file-arrow-up',
  readAs: 'formData'
});

const emits = defineEmits<FileUploader.Emits>();

const files = ref<Map<File['name'], FileUploader.InternalSignal<File>>>(new Map());
const dropZoneRef$ = ref<HTMLElement>();
const wrapperRef$ = ref<HTMLElement>();

const overflowed = signal(false);

const accept = computedEager(() =>
  !(props.accept === '*' || props.multiple === 'directory')
    ? Array.isArray(props.accept)
      ? map(props.accept, (ext) => ext.replace(/^\.?(.*)/, '.$1')).join(', ')
      : props.accept.replace(/^\.?(.*)/, '.$1')
    : undefined
);
const acceptStr = computedEager(() =>
  accept.value
    ? accept.value
        .split(', ')
        .map((ext) => ext.toUpperCase().substring(1))
        .reduce((str, ext, index, arr) => `${str}${index < arr.length - 1 ? ', ' : ' or '}${ext}`)
    : 'All Files'
);
const placeholder = computedEager(
  () => props.placeholder ?? `Drag ${props.multiple ? 'files' : 'a file'} here or click to browse`
);

const { open, onChange } = useFileDialog({
  accept: accept.value,
  multiple: Boolean(props.multiple),
  reset: true
});
const { isOverDropZone } = useDropZone(dropZoneRef$, (files) => {
  onFilesChange(files ?? []);
});

const onFilesChange = (payload: File[]) => {
  payload
    .map((file) => ({
      file,
      filename: file.name.replace(/\.[^/.]+$/, ''),
      type: file.name.split('.').pop()?.toUpperCase() ?? (file.type || 'BINARY'),
      reader: new FileReader(),
      status: signal<FileUploader.UploadStatus>('pending'),
      progress: signal(0)
    }))
    .map((payload) => ({
      ...payload,
      abort: () => {
        if (payload.status() === 'pending' || payload.status() === 'progressing') {
          payload.status.set('aborted');
          payload.reader.abort();
          emits('abort', payload.file.name);
        } else {
          files.value.delete(payload.file.name);
        }
      },
      delete: () => {
        files.value.delete(payload.file.name);
        emits('delete', payload.file.name);
      }
    }))
    .forEach((payload) => {
      if (props.readAs !== 'formData' && props.readAs !== 'stream') {
        payload.reader.onprogress = (event) => {
          payload.status.set('progressing');

          if (event.lengthComputable) {
            payload.progress.set(event.loaded / event.total);
          }
        };

        payload.reader.onloadstart = () => {
          payload.status.set('progressing');
        };

        payload.reader.onabort = () => {
          payload.status.set('aborted');
        };

        payload.reader.onerror = () => {
          payload.status.set('failed');
        };
      }

      files.value.set(payload.file.name, payload);
    });

  doUpload();
};

const doUpload = () => {
  const formData = new FormData();
  const result = {
    payload: new Map<File['name'], string | ArrayBuffer | ReadableStream<Uint8Array> | null>(),
    files: Array<FileUploader.UploadSignal>()
  };

  files.value.forEach((payload) => {
    const file: FileUploader.UploadSignal = {
      ...pick(payload.file, ['name', 'lastModified', 'webkitRelativePath', 'size', 'type']),
      status: payload.status,
      progress: payload.progress,
      abort: payload.abort,
      delete: payload.delete
    };

    result.files.push(file);

    switch (props.readAs) {
      case 'formData':
        formData.append('file', payload.file, payload.file.name);

        if (!props.multiple) {
          emits('upload', formData, file);
        } else if (result.files.length === formData.getAll('file').length) {
          emits('upload', formData, result.files);
        }

        break;
      case 'stream':
        result.payload.set(payload.file.name, payload.file.stream());

        if (!props.multiple) {
          emits(
            'upload',
            result.payload.get(payload.file.name) as ReadableStream<Uint8Array> | null,
            file
          );
        } else if (result.files.length === result.payload.size) {
          emits(
            'upload',
            result.payload as Map<File['name'], ReadableStream<Uint8Array> | null>,
            result.files
          );
        }

        break;
      default: {
        payload.reader.onload = () => {
          payload.status.set('succeeded');
          payload.progress.set(1);
          result.payload.set(payload.file.name, payload.reader.result);

          if (!props.multiple) {
            emits('success');
          } else {
            emits('success', payload.file.name);
          }

          switch (props.readAs) {
            case 'buffer':
              if (!props.multiple) {
                emits('upload', result.payload.get(payload.file.name) as ArrayBuffer, file);
              } else if (result.files.length === result.payload.size) {
                emits('upload', result.payload as Map<File['name'], ArrayBuffer>, result.files);
              }

              break;
            case 'binary':
              if (!props.multiple) {
                emits('upload', result.payload.get(payload.file.name) as string, file);
              } else if (result.files.length === result.payload.size) {
                emits('upload', result.payload as Map<File['name'], string>, result.files);
              }

              break;
            case 'base64':
              if (!props.multiple) {
                emits('upload', result.payload.get(payload.file.name) as string, file);
              } else if (result.files.length === result.payload.size) {
                emits('upload', result.payload as Map<File['name'], string>, result.files);
              }

              break;
            default:
              if (!props.multiple) {
                emits('upload', result.payload.get(payload.file.name) as string, file);
              } else if (result.files.length === result.payload.size) {
                emits('upload', result.payload as Map<File['name'], string>, result.files);
              }

              break;
          }
        };

        result.payload.set(payload.file.name, payload.reader.result);

        switch (props.readAs) {
          case 'buffer':
            payload.reader.readAsArrayBuffer(payload.file);
            break;
          case 'binary':
            payload.reader.readAsBinaryString(payload.file);
            break;
          case 'base64':
            payload.reader.readAsDataURL(payload.file);
            break;
          default:
            payload.reader.readAsText(payload.file);
            break;
        }
      }
    }
  });
};

const computeOverflowed = () => {
  if (wrapperRef$.value) {
    const { scrollHeight, clientHeight } = wrapperRef$.value;
    overflowed.set(scrollHeight > clientHeight + 1);
  }
};

onChange((files) => {
  onFilesChange(map(files));
});

useResizeObserver(wrapperRef$, computeOverflowed, {
  window
});
</script>

<template>
  <div
    ref="dropZoneRef$"
    :class="[$style['uploader-container'], $style.wrapper, $style.flex, $style.vertical]"
  >
    <template v-if="isOverDropZone || files.size === 0">
      <CardBox
        @click="open"
        :class="[
          $style['uploader-drop-area'],
          $style.wrapper,
          $style.flex,
          $style.vertical,
          $style.behavior,
          $style.clickable,
          isOverDropZone && $style.active
        ]"
        radius="var(--agh-ref-border-radius-300)"
        variant="dash"
      >
        <Icon :class="$style.icon" :icon="props.icon" />
        <h1>{{ placeholder }}</h1>
        <p>{{ acceptStr }}</p>
      </CardBox>
    </template>
    <template v-else>
      <div
        ref="wrapperRef$"
        :class="[
          $style['uploader-file-list'],
          $style.wrapper,
          $style.flex,
          $style.vertical,
          overflowed() && $style.overflowed
        ]"
      >
        <template v-for="[filename, payload] in files" :key="`file-${filename}`">
          <CardBox
            :class="[$style['uploader-file-card'], $style.wrapper, $style.flex, $style.horizontal]"
            :has-stroke="false"
            radius="var(--agh-ref-border-radius-400)"
            variant="flat"
          >
            <div :class="[$style.icon, $style[payload.status()]]">
              <Icon
                :icon="
                  payload.status() === 'progressing'
                    ? 'fa6-solid:upload'
                    : payload.status() === 'failed'
                      ? 'fa6-solid:circle-xmark'
                      : payload.status() === 'succeeded'
                        ? 'fa6-solid:circle-check'
                        : payload.status() === 'aborted'
                          ? 'fa6-solid:circle-stop'
                          : props.icon
                "
              />
            </div>
            <div
              :class="[
                $style['uploader-file-content'],
                $style.wrapper,
                $style.flex,
                $style.vertical
              ]"
            >
              <h1>{{ payload.filename }}</h1>
              <p>{{ payload.type }}・{{ String$.humanizeByte(payload.file.size) }}</p>
            </div>
            <template v-if="payload.status() === 'progressing'">
              <div
                :class="[
                  $style['uploader-file-progress'],
                  $style.wrapper,
                  $style.flex,
                  $style.horizontal
                ]"
              >
                <ProgressBar
                  :class="$style['uploader-file-progress']"
                  :value="payload.progress()"
                />
                <p>{{ (payload.progress() * 100).toFixed(0) }}%</p>
              </div>
            </template>
            <template v-if="payload.status() === 'succeeded'">
              <ButtonBox
                @click="payload.delete()"
                :class="$style.button"
                icon="fa6-solid:trash"
                variant="text"
              />
            </template>
            <template v-else>
              <ButtonBox
                @click="payload.abort()"
                :class="$style.button"
                icon="fa6-solid:xmark"
                variant="text"
              />
            </template>
          </CardBox>
        </template>
      </div>
    </template>
  </div>
</template>

<style module scoped lang="scss">
@use '@/assets/styles/modules/behavior.module' as behavior;
@use '@/assets/styles/modules/scrollbar.module' as scrollbar;
@use '@/assets/styles/modules/wrapper.module' as wrapper;

.uploader {
  &-container {
    max-width: 100%;
    max-height: 100%;
    margin: calc(var(--agh-ref-spacing-700) * -1);
    padding: var(--agh-ref-spacing-700);
    overflow: hidden;
  }

  &-drop-area {
    --wrapper-gap: var(--agh-ref-spacing-100);

    padding: var(--agh-ref-spacing-900);
    place-content: center;
    place-items: center;

    &.active {
      background-color: var(--agh-sys-color-blue-surface-normal);

      > .icon,
      > h1 {
        color: var(--agh-ref-color-blue-500);
      }
    }

    > .icon {
      color: var(--agh-ref-color-grayscale-1100);
      font-size: var(--agh-ref-icon-size-1100);
      margin-bottom: calc(var(--agh-ref-spacing-500) - var(--agh-ref-spacing-100));
    }

    h1 {
      color: var(--agh-ref-color-grayscale-1100);
      font: var(--agh-ref-typeface-title-pop-up-small);
    }

    p {
      color: var(--agh-ref-color-grayscale-600);
      font: var(--agh-ref-typeface-content-default-xlarge);
    }
  }

  &-file {
    &-list {
      --wrapper-gap: var(--agh-ref-spacing-500);

      width: 100%;
      height: 100%;
      margin: calc(var(--agh-ref-spacing-700) * -1);
      padding: var(--agh-ref-spacing-700);
      overflow-y: auto;

      &.overflowed {
        @include scrollbar.use($offset: var(--agh-ref-spacing-700));

        width: calc(100% - var(--agh-ref-spacing-400));
        padding-right: calc(var(--agh-ref-spacing-700) - var(--agh-ref-spacing-400));
      }
    }

    &-card {
      --wrapper-gap: var(--agh-ref-spacing-300);

      padding: var(--agh-ref-spacing-300) var(--agh-ref-spacing-500);
      place-items: center;
      justify-content: space-between;

      .icon {
        font-size: var(--agh-ref-icon-size-600);
        height: var(--agh-ref-icon-size-600);
        width: var(--agh-ref-icon-size-600);

        $style-sets: (
          'succeeded': 'green-500',
          'failed': 'red-500',
          'aborted': 'orange-500',
          'progressing': 'grayscale-1000',
          'pending': 'grayscale-600'
        );

        @each $style, $color in $style-sets {
          &.#{$style} {
            color: var(--agh-ref-color-#{$color});
          }
        }
      }

      .button {
        color: var(--agh-ref-color-grayscale-700) !important;
      }
    }

    &-content {
      --wrapper-gap: var(--agh-ref-spacing-100);

      max-width: 40%;
      margin-right: auto;

      h1 {
        color: var(--agh-ref-color-grayscale-1100);
        font: var(--agh-ref-typeface-label-default-xlarge);
      }

      p {
        white-space: nowrap;
        color: var(--agh-ref-color-grayscale-600);
        font: var(--agh-ref-typeface-content-default-medium);
      }
    }

    &-progress {
      max-width: var(--agh-sys-gadget-progress-bar-width-small);
      min-width: 40%;

      &.wrapper {
        --wrapper-gap: var(--agh-ref-spacing-500);

        flex-shrink: 0;

        p {
          color: var(--agh-ref-color-cyan-600);
          font: var(--agh-ref-typeface-label-hl-large);
        }
      }
    }
  }
}
</style>
