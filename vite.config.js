import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const imageExtensions = /\.(png|jpe?g|gif|svg|webp|ico|bmp|avif)$/i

function copyImageFiles(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return

  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    if (entry.name === '.DS_Store') continue

    const srcPath = path.join(srcDir, entry.name)
    const destPath = path.join(destDir, entry.name)

    if (entry.isDirectory()) {
      copyImageFiles(srcPath, destPath)
      continue
    }

    if (!imageExtensions.test(entry.name)) continue

    fs.mkdirSync(destDir, { recursive: true })
    fs.copyFileSync(srcPath, destPath)
  }
}

function syncAllImagesPlugin() {
  const publicImagesDir = path.resolve(__dirname, 'public/images')

  const syncImages = () => {
    copyImageFiles(path.resolve(__dirname, 'src/assets'), publicImagesDir)

    const imageDir = path.resolve(__dirname, 'Image')
    if (fs.existsSync(imageDir)) {
      for (const file of fs.readdirSync(imageDir)) {
        if (!/\.(jpe?g)$/i.test(file)) continue
        fs.copyFileSync(path.join(imageDir, file), path.join(publicImagesDir, file))
      }
    }

    const locationsDir = path.join(publicImagesDir, 'locations')
    for (const file of fs.readdirSync(__dirname)) {
      const filePath = path.join(__dirname, file)
      if (!imageExtensions.test(file) || !fs.statSync(filePath).isFile()) continue
      fs.mkdirSync(locationsDir, { recursive: true })
      fs.copyFileSync(filePath, path.join(locationsDir, file))
    }
  }

  return {
    name: 'sync-all-images',
    buildStart() {
      syncImages()
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), syncAllImagesPlugin()],
  base: './', // Use relative paths for assets
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const fileName = assetInfo.names?.[0] ?? assetInfo.name ?? ''
          if (imageExtensions.test(fileName)) {
            return 'images/[name]-[hash][extname]'
          }
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
})
