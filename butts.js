module.exports = {
  plugins: [
    "stylelint",
    [
      "postcss-import",
      {
        addModulesDirectories: ["build/css/tokens"],
      },
    ],
    "postcss-nested",
    [
      "postcss-preset-env",
      {
        stage: 1,
        features: {
          "nesting-rules": false,
        },
      },
    ],
    "postcss-reporter",
  ],
}
