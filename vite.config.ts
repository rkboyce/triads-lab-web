/// <reference types="node" />

import fs from 'node:fs';
import path from 'node:path';

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

const workspaceRoot = process.cwd().replace(/\\/g, '/');
const realWorkspaceRoot = fs.realpathSync.native(process.cwd()).replace(/\\/g, '/');
const fsAllow = Array.from(
	new Set([
		workspaceRoot,
		realWorkspaceRoot,
		path.posix.join(workspaceRoot, 'node_modules'),
		path.posix.join(realWorkspaceRoot, 'node_modules')
	])
);

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: fsAllow
    },
    watch: {
      // Ignore the C:\pitt tree which contains a symlink loop on this machine.
      // This prevents chokidar/Vite from throwing ELOOP on startup.
      ignored: ['C:/pitt/**', '**/node_modules/**', '**/.git/**']
    }
  }
});
