import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/KontenSains/', // ← ganti sesuai nama repository GitHub kamu
})
