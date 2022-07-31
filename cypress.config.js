const { defineConfig } = require('cypress')
const fs = require('fs-extra')
const path = require('path')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  projectId: 'g93x5a',
  video: false,
  retries: {
    runMode: 2,
    openMode: 0,
  },
  env:{
    url: 'https://mailchimp.com'
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      // return require('./cypress/plugins/index.js')(on, config)
      on('file:preprocessor', cucumber())
      const file = config.env.configFile || 'test'
      return getConfigurationByFile(file)
    },
    specPattern: 'cypress/integration/**/*.{feature,features}',
  },
})
function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    'cypress/config', `${file}.json`
  )
  return fs.readJson(pathToConfigFile)
}