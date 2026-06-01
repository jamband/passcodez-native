import type { Config } from "jest";

export default {
  preset: "@react-native/jest-preset",
  roots: ["<rootDir>/src/"],
  testRegex: ".test.(ts|tsx)$",
  transform: { ".(ts|tsx)$": "ts-jest" },
  transformIgnorePatterns: [
    "node_modules/.pnpm/(?!@react-native|react-native)",
  ],
  collectCoverageFrom: ["**/*.(ts|tsx)"],
  moduleNameMapper: { "^~/(.*)$": "<rootDir>/src/$1" },
  coverageDirectory: "<rootDir>/coverage",
} satisfies Config;
