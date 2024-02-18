import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 4600,
    open: "two-bars/index.html",
  },
  base: "./",
  build: {
    outDir: "../docs/src/examples",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        "two-bars": "two-bars/index.html",
        building: "building/index.html",
        sphere: "sphere/index.html",
        "2d-truss": "2d-truss/index.html",
        "3d-tower": "3d-tower/index.html",
        "arched-bridge": "arched-bridge/index.html",
        "portal-frame": "portal-frame/index.html",
      },
    },
  },
});
