import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/portfolioUS/', // -> sostituisci con il nome del repo oppure './' per path relativi
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
