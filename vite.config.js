import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    root: 'src',
    build: {
        outDir: '../build',
        rollupOptions: {
            input: {
                main: '/src/main.jsx'
            }
        }
    }
});

