import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

declare const process: { env: Record<string, string | undefined> };

export default defineConfig({
  // Na Vercel o site fica na raiz; no cPanel, na subpasta /apresentacao-ugc/.
  base: process.env.VERCEL ? '/' : '/apresentacao-ugc/',
  plugins: [react()],
});
