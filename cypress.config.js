const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',
    setupNodeEvents(on, config){
  },
  },
});
