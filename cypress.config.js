const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    baseUrl: "https://phptravels.net/",
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
    },
  },
});
module.exports = defineConfig({
  projectId: 'u5x39s',
  e2e: {
    setupNodeEvents(on, config){

    },
    viewportWidth: 1280,
    viewportHeight: 720,
  }

})
