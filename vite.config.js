import { defineConfig } from 'vite'

export default defineConfig({
  base: "/Test-work/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/[name].css'; // Без хэша
          }
          return 'assets/[name]-[hash][extname]'; // Остальные файлы с хэшем
        },
      },
    },
  },
});
