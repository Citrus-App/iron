const StyleDictionary = require("style-dictionary");

StyleDictionary.registerFilter({
  name: "isLight",
  matcher: function (token) {
    return token.path[0] === "light";
  },
});

StyleDictionary.registerFilter({
  name: "isDark",
  matcher: function (token) {
    return token.path[0] === "dark";
  },
});

StyleDictionary.registerFilter({
  name: "isGlobal",
  matcher: function (token) {
    return token.path[0] === "global";
  },
});

StyleDictionary.registerFilter({
  name: "isSpectrum",
  matcher: function (token) {
    return token.path[0] === "spectrum";
  },
});

StyleDictionary.registerTransform({
  type: "name",
  name: "name/flatten-category",
  transformer: (token) => {
    const [category, ...rest] = token.path;
    if (category === "global") {
      return rest.join("-");
    }
    if (category === "dark" || category === "light") {
      return token.path.pop()
    }
    return token.path.join("-")
  },
});

module.exports = {
  source: ["tokens/**/*.json"],
  platforms: {
    css: {
      transformGroup: "css",
      buildPath: "src/components/Theme/",
      files: [
        {
          destination: "index.css",
          format: "css/variables",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "tokens.js",
          format: "javascript/module-flat",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    css: {
      transformGroup: "css",
      transforms: ["name/flatten-category"],
      buildPath: "src/components/Theme/",
      files: [
        {
          destination: "light-tokens.css",
          format: "css/variables",
          filter: "isLight",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "dark-tokens.css",
          format: "css/variables",
          filter: "isDark",
          options: {
            outputReferences: true,
          },
        },
        {
          destination: "global-tokens.css",
          format: "css/variables",
          filter: "isGlobal",
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "build/ios/",
      files: [
        {
          destination: "StyleDictionaryColor.h",
          format: "ios/colors.h",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionaryColor.m",
          format: "ios/colors.m",
          className: "StyleDictionaryColor",
          type: "StyleDictionaryColorName",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.h",
          format: "ios/static.h",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
        {
          destination: "StyleDictionarySize.m",
          format: "ios/static.m",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "build/ios-swift/",
      files: [
        {
          destination: "StyleDictionary.swift",
          format: "ios-swift/class.swift",
          className: "StyleDictionary",
          filter: {},
        },
      ],
    },
    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "build/ios-swift/",
      files: [
        {
          destination: "StyleDictionaryColor.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionaryColor",
          filter: {
            attributes: {
              category: "color",
            },
          },
        },
        {
          destination: "StyleDictionarySize.swift",
          format: "ios-swift/enum.swift",
          className: "StyleDictionarySize",
          type: "float",
          filter: {
            attributes: {
              category: "size",
            },
          },
        },
      ],
    },
  },
};
