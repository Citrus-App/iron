import '../build/tokens/index.css'
import '../src/components/Theme/light-tokens.css'
import '../src/components/Theme/global-tokens.css'

import '../src/stories/docs.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}