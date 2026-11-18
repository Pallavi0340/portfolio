import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import {defineConfig, transformWithOxc} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      {
        name: 'treat-js-files-as-jsx',
        enforce: 'pre',
        async transform(code, id) {
          if (!/\/src\/.*\.js$/.test(id)) {
            return null;
          }
          return transformWithOxc(code, id, {
            lang: 'jsx',
            jsx: {
              runtime: 'automatic',
            },
          });
        },
      },
      react({
        include: /\.(js|jsx|ts|tsx)$/,
      }),
      // Copies src/assets into dist/ so root-relative URLs like
      // "/src/assets/images/..." (e.g. generate_image output) still resolve
      // in production builds. Do not remove.
      {
        name: 'copy-unbundled-src-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) {
            return;
          }
          const distDir = path.resolve(__dirname, 'dist');
          const srcAssets = path.resolve(__dirname, 'src/assets');
          const distAssets = path.resolve(distDir, 'src/assets');
          if (fs.existsSync(distDir) && fs.existsSync(srcAssets)) {
            fs.cpSync(srcAssets, distAssets, {recursive: true, force: true});
          }
        },
      },
    ],
    optimizeDeps: {
      rolldownOptions: {
        moduleTypes: {
          '.js': 'jsx',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
