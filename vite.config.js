import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    root: './',
    outDir: './docs',  
    rollupOptions: {
      input: {
        pagina1: './pagina1.html', 
        pagina2: './pagina2.html',
      },
    },
  },

  server: {
    open: '/pagina1.html',
  },

  base: './',  
});
