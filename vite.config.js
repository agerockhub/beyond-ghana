import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/beyond-ghana/",

  build: {
    assetsDir: "assets",

    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),

        destination: resolve(
          import.meta.dirname,
          "destination.html"
        ),

        favorites: resolve(
          import.meta.dirname,
          "favorites.html"
        )
      }
    }
  }
});
