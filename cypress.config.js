const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity:false,
    specPattern:['./cypress/integration/examples/promblem_user.js', 'cypress/integration/examples/standard_user.js']

  },
});
