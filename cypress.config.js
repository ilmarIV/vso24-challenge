const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    // implement node event listeners here
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",
    },
  },
});
