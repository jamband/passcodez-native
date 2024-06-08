import type { Config } from "jest";

export default {
  moduleFileExtensions: ["js", "json", "ts", "tsx"],
  roots: ["<rootDir>/src/"],
  testRegex: ".test.(ts|tsx)$",
  transform: { ".(ts|tsx)$": "ts-jest" },
  transformIgnorePatterns: [
    "node_modules/.pnpm/(?!@react-native|react-native)",
  ],
  collectCoverageFrom: ["**/*.(ts|tsx)"],
  preset: "react-native",
  setupFilesAfterEnv: ["<rootDir>/jest.config.ts"],
  moduleNameMapper: { "^~/(.*)$": "<rootDir>/src/$1" },
  coveragePathIgnorePatterns: [],
  coverageDirectory: "<rootDir>/coverage",
} satisfies Config;
