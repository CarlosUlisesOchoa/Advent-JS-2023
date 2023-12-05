// jest.config.mjs
export default {
  preset: "ts-jest/presets/default-esm", // use the ESM preset
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1", // map .js files to their source .ts files
  },
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  testMatch: [
    "<rootDir>/retos/dist/**/*.test.js", // This pattern should match your test files
  ],
  testEnvironment: "node",
  // ... any other config you might have ...
};
