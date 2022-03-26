import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { svgBuilder } from './src/plugins/svgBuilder';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgBuilder('./public/assets/icons/')]
})
