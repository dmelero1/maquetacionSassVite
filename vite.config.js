import { defineConfig } from 'vite';
import path, { resolve } from 'path';

export default defineConfig({
  build: {
    root: "./", 
    outDir: "./docs",
    rollupOptions: {
      input: {
        pagina1: resolve(__dirname, "pagina1.html"),
        pagina2: resolve(__dirname, "pagina2.html"),
      },
    },
  },
  base: "./myfinalweb/",
});
