module.exports = {
  globals: {
    __PATH_PREFIX__: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/no-danger": 0,
  },
  settings: {
    "import/resolver": {
      alias: [
        ["src", "./src"],
        ["assets", "./src/assets"],
        ["components", "./src/components"],
        ["pages", "./src/pages"],
        ["templates", "./src/templates"],
        ["layout", "./src/layout"],
      ],
    },
  },
}
