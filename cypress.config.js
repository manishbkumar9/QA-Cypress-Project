const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'gkwr57',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
