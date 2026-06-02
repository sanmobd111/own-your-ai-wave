import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import tailwindcss from '@tailwindcss/vite';
import { nitro } from 'nitro/vite';
export default defineConfig({
  plugins: [tailwindcss(), nitro()],
  tanstackStart: {
    server: { entry: "server" }
  }
});
