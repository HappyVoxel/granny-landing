import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // graphile-migrate loads .gmrc.js as CommonJS.
  {
    files: [".gmrc.js"],
    rules: { "@typescript-eslint/no-require-imports": "off" },
  },
  // Vendored shadcn files; the rule fires on generated code we do not edit.
  {
    files: ["components/ui/**", "hooks/**"],
    rules: { "react-hooks/set-state-in-effect": "off" },
  },
]);

export default eslintConfig;
