import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import security from "eslint-plugin-security";
import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import unusedImports from "eslint-plugin-unused-imports";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      security,
      sonarjs,
      unicorn,
      "unused-imports": unusedImports,
    },
    rules: {
      // Clean code & DX
      "no-console": "warn",
      "unused-imports/no-unused-imports": "error",
      "@typescript-eslint/no-explicit-any": "warn",

      // Some light-weight unicorn & sonarjs rules that are generally safe
      "unicorn/prefer-query-selector": "warn",
      "unicorn/prefer-includes": "warn",
      "sonarjs/no-duplicate-string": "off", // too noisy for UI apps
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
