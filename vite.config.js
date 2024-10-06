import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Configuration pour les fichiers statiques 
  publicDir: 'public',
});