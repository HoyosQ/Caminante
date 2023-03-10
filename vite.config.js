import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  clearScreen: false,
  publicDir: 'estaticos',
  build: {
    outDir: './doc',
    assetsDir: 'recursos',
    sourcemap: true,
  },
});
