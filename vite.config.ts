import { crx, defineManifest } from "@crxjs/vite-plugin";
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const manifest = defineManifest({
    manifest_version:3,
    name: "chrome ext sample",
    version: "0.0.1",
    permissions: ["bookmarks"],
    action: {
        default_popup: "index.html",
    },
});
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), crx({ manifest })],
})
