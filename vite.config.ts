import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Plugins extend Vite: React enables JSX and live updates; Tailwind generates
// the CSS utilities we use in className. Vitest shares this configuration.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  test: { environment: 'jsdom', restoreMocks: true },
});
