import type { Signal } from '../../../shared/libs/signal';
export declare namespace FileUploader {
    interface Props {
        placeholder?: string;
        icon?: string;
        required?: boolean;
        disabled?: boolean;
        accept?: string[] | string;
        multiple?: boolean | 'directory';
        readAs?: 'formData' | 'stream' | 'base64' | 'binary' | 'buffer' | 'text';
    }
    type UploadStatus = 'pending' | 'progressing' | 'succeeded' | 'failed' | 'aborted';
    type UploadSignal = Pick<File, 'name' | 'lastModified' | 'webkitRelativePath' | 'size' | 'type'> & {
        status: Signal<UploadStatus>;
        progress: Signal<number>;
        abort: () => void;
        delete: () => void;
    };
    type InternalSignal<F extends File> = {
        file: F;
        filename: string;
        type: string;
        reader: FileReader;
        status: Signal<UploadStatus>;
        progress: Signal<number>;
        abort: () => void;
        delete: () => void;
    };
    interface Emits {
        (e: 'upload', payload: FormData, file: UploadSignal): void;
        (e: 'upload', payload: FormData, files: UploadSignal[]): void;
        (e: 'upload', payload: ReadableStream<Uint8Array> | null, file: UploadSignal): void;
        (e: 'upload', payload: Map<File['name'], ReadableStream<Uint8Array> | null>, files: UploadSignal[]): void;
        (e: 'upload', payload: string | null, file: UploadSignal): void;
        (e: 'upload', payload: Map<File['name'], string | null>, files: UploadSignal[]): void;
        (e: 'upload', payload: ArrayBuffer | null, file: UploadSignal): void;
        (e: 'upload', payload: Map<File['name'], ArrayBuffer | null>, files: UploadSignal[]): void;
        (e: 'success'): void;
        (e: 'success', filename: string): void;
        (e: 'error'): void;
        (e: 'error', filename: string): void;
        (e: 'abort'): void;
        (e: 'abort', filename: string): void;
        (e: 'delete', filenames: string): void;
    }
}
