import { defineConfig } from "vitest/config";

// https://vite.dev/config/
export default defineConfig({
  test: {
    css: true,
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/setupTests.ts",
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
  },
});
