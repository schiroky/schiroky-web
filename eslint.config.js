import astro from "eslint-plugin-astro";

export default [
  {
    ignores: [".astro/**", "dist/**", "node_modules/**"],
  },
  ...astro.configs["flat/recommended"],
];
