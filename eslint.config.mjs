import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    // You can apply this rule globally or to specific files using the 'files' property if needed
    rules: {
      "react/no-unescaped-entities": "off", // Disable the rule
    },
  },
];

export default eslintConfig;