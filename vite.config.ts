import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    watch: {
      // Ignore the C:\pitt tree which contains a symlink loop on this machine.
      // This prevents chokidar/Vite from throwing ELOOP on startup.
      ignored: ['C:/pitt/**', '**/node_modules/**', '**/.git/**']
    }
  }
});
