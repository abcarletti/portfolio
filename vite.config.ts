import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'global': {},
    'process.env': {},
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      'src': '/src',
      '@components': '/src/components',
      '@assets': '/src/assets',
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
