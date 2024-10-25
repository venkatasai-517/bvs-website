import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    mimeTypes: {
      'application/javascript': ['.js'],
      'text/css': ['.css'],
    },
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
});
