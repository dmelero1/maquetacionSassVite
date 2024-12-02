import { defineConfig } from 'vite';
import path, { resolve } from 'path';

export default defineConfig({
  build: {
    root: "./", 
    outDir: "./docs",
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        info: resolve(__dirname, "info.html"),
      },
    },
  },
  base: './maquetacionSassVite',
});
