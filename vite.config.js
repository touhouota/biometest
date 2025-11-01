import { defineConfig } from "vite";
import rollupPluginGas from "rollup-plugin-google-apps-script";
import { viteStaticCopy } from "vite-plugin-static-copy";

import path from "node:path";

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: "src/main.ts",
      output: {
        dir: "./dist",
        entryFileNames: "main.js",
      },
    },
    minify: false,
  },
  plugins: [
    rollupPluginGas(),
    viteStaticCopy({
      targets: [
        {
          dest: "./",
          src: "./appsscript.json"
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});