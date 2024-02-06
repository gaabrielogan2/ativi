const { defineConfig } = require("cypress");

module.exports = defineConfig({
  eporter: 'mochawesome',
  "reporterOptions": {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "reportFileName": "index.html",
    "html": true,
    "json": false
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://lojaebac.ebaconline.art.br/'
  },
});
