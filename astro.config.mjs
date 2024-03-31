import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react()],
  adapter: netlify(),
  buildOptions: {
    // Répertoire de sortie après la construction
    out: 'dist',
    // Configuration des noms de fichiers pour les actifs (y compris les images)
    output: {
      assetFileNames: '[name][extname]',
    },
  },
});
