module.exports = {
  root: true,
  env: {
    node: true,
  },
  // "@vue/prettier"
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
  parserOptions: {
    sourceType: "module",
    parser: "babel-eslint",
    ecmaVersion: 6,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "linebreak-style":"off"
  },
};
