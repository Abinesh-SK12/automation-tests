const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "tre3q4", 
  e2e: {
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
      
    },
  },
});

