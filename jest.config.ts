/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*\\.(test|spec))\\.[tj]sx?$",
  testTimeout: 10_000,
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!**/*.stories.{js,jsx,ts,tsx}",
    "!**/__fixtures__/**",
  ],
  reporters: ["default"],
  coverageReporters: ["text", "html", "cobertura"],
  globalSetup: "<rootDir>/jest.global.ts",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

export default config;
