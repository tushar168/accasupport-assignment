const defaultConfig = require('../nuxt.config').default
defaultConfig.head.meta = []
const index = defaultConfig.modules.indexOf('@nuxtjs/dotenv')
defaultConfig.modules.splice(index, 1)

export default {
  ...defaultConfig,
  generate: {
    dir: 'dist/dev'
  },
  modules: [
    ...defaultConfig.modules,
    ['@nuxtjs/dotenv', { filename: './config/env/dev.env' }]
  ]
}
