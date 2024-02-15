import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'node:path';

import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

import { compilerOptions, transformAssetUrls } from 'vue3-pixi/compiler';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    Vue({
      template: {
        compilerOptions,
        transformAssetUrls
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: {
        shared: resolve(__dirname, 'src/shared/index.ts'),
        component: resolve(__dirname, 'src/components/index.ts'),
        middleware: resolve(__dirname, 'src/middleware/index.ts')
      },
      name: 'UI',
      // the proper extensions will be added
      fileName: (format, entry) => `ui.${entry}.${format}.js`,
      formats: ['es', 'cjs']
    },
    minify: true,
    emptyOutDir: true,
    sourcemap: true,
    rollupOptions: {
      // Vue is provided by the parent project, don't compile Vue source-code inside our library.
      external: ['vue', '@iconify/vue/offline'],
      output: { globals: { vue: 'Vue' }, inlineDynamicImports: false, format: 'esm' }
    }
  },
  test: {
    environment: 'jsdom'
  }
}));
