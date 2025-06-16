import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Konten-Sains/', // ← ganti sesuai nama repository GitHub kamu
})
