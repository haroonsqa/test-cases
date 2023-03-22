const { defineConfig } = require("cypress");

module.exports = defineConfig({

  
  e2e: {
    
    watchForFileChanges : false,
    viewportWidth: 1366,
    viewportHeight: 768
  },
  env: {
    foo: 'bar',
    baz: 'quux'
  }
});
