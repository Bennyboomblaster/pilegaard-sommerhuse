import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  publicDir: 'Assets',
  base: command === 'build' ? '/pilegaard-sommerhuse/' : '/',
}))
