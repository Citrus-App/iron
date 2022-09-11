const StyleDictionary = require('style-dictionary')

const isValidToken = (token) =>
  typeof token.value === 'string' || typeof token.value === 'number'

const isValidName = (token) => !token.name.includes("'")

const isDark = (token) => {
  if (isValidToken(token)) {
    return token.path[0] === 'dark' || token.path[0] === 'global'
  }
}

const isLight = (token) => {
  if (isValidToken(token)) {
    return token.path[0] === 'light' || token.path[0] === 'global'
  }
}

StyleDictionary.registerFilter({
  name: 'isLight',
  matcher: function (token) {
    return isLight(token)
  },
})

StyleDictionary.registerFilter({
  name: 'isDark',
  matcher: function (token) {
    return isDark(token)
  },
})

StyleDictionary.registerFilter({
  name: 'isValid',
  matcher: function (token) {
    return isValidToken(token) && isValidName(token)
  },
})

StyleDictionary.registerTransform({
  type: 'name',
  name: 'name/flatten-category',
  transformer: (token) => {
    const [category, subcategory, ...rest] = token.path
    if (category === 'global') {
      if (subcategory == 'spectrum') {
        return [subcategory, ...rest].join('-')
      }
      if (subcategory === 'consistent' || subcategory === 'featuredContext') {
        return token.path.pop()
      }
    }

    if (category === 'light' || category === 'dark') {
      return token.path.pop()
    }

    return token.path.join('-')
  },
})

StyleDictionary.registerTransform({
  type: 'value',
  name: 'value/back-up-font',
  transformer: (token) => {
    if (token.value === 'SF Compact') {
      return `'${token.value}', system-ui, sans-serif`
    }
    return token.value
  }
})

const writeVars = (tokens) =>
  tokens
    .map((token) =>
      token && isValidToken(token) && isValidName(token)
        ? `--${token.name}: ${token.value};`
        : undefined
    )
    .filter(function (strVal) {
      return !!strVal
    })
    .join('\n')

StyleDictionary.registerFormat({
  name: 'splitByMode',
  formatter: function ({ dictionary }) {
    const darkTokens = writeVars(
      dictionary.allTokens.filter((token) => isDark(token))
    )

    const lightTokens = writeVars(
      dictionary.allTokens.filter((token) => isLight(token))
    )

    return (
      `.dark {\n` +
      darkTokens +
      `\n}\n` +
      `\n.light {\n` +
      lightTokens +
      `\n}\n`
    )
  },
})

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'src/components/Theme/',
      files: [
        {
          destination: 'index.css',
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    css: {
      transformGroup: 'css',
      transforms: ['name/flatten-category', 'value/back-up-font'],
      buildPath: 'src/components/Theme/',
      files: [
        {
          destination: 'light-tokens.module.css',
          format: 'css/variables',
          filter: 'isLight',
        },
        {
          destination: 'dark-tokens.module.css',
          format: 'css/variables',
          filter: 'isDark',
        },
        {
          destination: 'tokens.module.css',
          format: 'splitByMode',
        },
      ],
    },
    javascript: {
      transformGroup: 'js',
      transforms: ['value/back-up-font'],
      buildPath: 'src/components/Theme/',
      files: [
        {
          destination: 'tokens.ts',
          format: 'javascript/module',
          filter: 'isValid',
        }
      ],
    },
    ios: {
      transformGroup: 'ios',
      buildPath: 'build/ios/',
      files: [
        {
          destination: 'StyleDictionaryColor.h',
          format: 'ios/colors.h',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionaryColor.m',
          format: 'ios/colors.m',
          className: 'StyleDictionaryColor',
          type: 'StyleDictionaryColorName',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.h',
          format: 'ios/static.h',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.m',
          format: 'ios/static.m',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
    'ios-swift': {
      transformGroup: 'ios-swift',
      buildPath: 'build/ios-swift/',
      files: [
        {
          destination: 'StyleDictionary.swift',
          format: 'ios-swift/class.swift',
          className: 'StyleDictionary',
          filter: {},
        },
      ],
    },
    'ios-swift-separate-enums': {
      transformGroup: 'ios-swift-separate',
      buildPath: 'build/ios-swift/',
      files: [
        {
          destination: 'StyleDictionaryColor.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionaryColor',
          filter: {
            attributes: {
              category: 'color',
            },
          },
        },
        {
          destination: 'StyleDictionarySize.swift',
          format: 'ios-swift/enum.swift',
          className: 'StyleDictionarySize',
          type: 'float',
          filter: {
            attributes: {
              category: 'size',
            },
          },
        },
      ],
    },
  },
}
