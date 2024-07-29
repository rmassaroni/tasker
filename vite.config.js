import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],
    // main: 'src/main.jsx',
    // root: path.resolve(__dirname),
    // root: 'public',
    root: 'src',
    build: {
        outDir: '../build',
        // outDir: '../dist',
        // emptyOutDir: true,
        rollupOptions: {
            input: {
                main: '/src/main.jsx',
            }
            // input: path.resolve(__dirname, 'src/main.jsx'),
        }
    },
    // publicDir: '../public',
    // publicDir: '/public',
    // server: {
        // port: 5173,
        // open: true
    // },
    // plugins: [react()],
    // root: path.resolve(__dirname),
    // // root: 'public',
    // build: {
    //     outDir: path.resolve(__dirname, 'dist'), 
    //     emptyOutDir: true,
    //     rollupOptions: {
    //         input: path.resolve(__dirname, 'src/main.jsx'), 
    //     },
    // },
    // publicDir: 'public',
    // server: {
    //     port: 5173,
    //     // open: true, 
    // },
});

