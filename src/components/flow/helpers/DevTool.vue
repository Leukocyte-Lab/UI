<script setup lang="ts">
import { useApplication } from 'vue3-pixi';

const PIXIAppInstance = useApplication();

window.__PIXI_APP__ = PIXIAppInstance.value;
</script>

<!-- eslint-disable-next-line vue/valid-template-root -->
<template>
  <!-- // ? Vue need a root template element to be able to render the component -->
</template>
