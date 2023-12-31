import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue(), viteSingleFile()],
  build: {
    target: 'esnext',
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    emptyOutDir: false,
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'src/ui/index.html')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
					@import 'src/ui/assets/global.scss';
				`
      }
    }
  }
});
