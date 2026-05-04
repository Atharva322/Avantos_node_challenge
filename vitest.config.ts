import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    pool: "forks",
    maxWorkers: 1,
    minWorkers: 1,
    include: ["src/**/*.test.ts", "src/**/*.test.tsx"],
    exclude: [
      "node_modules/**",
      "organized_data/**",
      "organized_data_merged/**",
      "organized_data_linked/**",
      "docs_live_v4/**",
      "docs_live_v4_missing_seed/**",
      "scrape_runs/**",
      "normalized_offline/**"
    ]
  }
});
