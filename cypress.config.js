const {defineConfig} = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1366,
    viewportHeight: 768,
    numTestsKeptInMemory: 5,
    e2e: {
        baseUrl: "http://www.htmlcanvasstudio.com/"
    },
    env: {
        hideXhr: true
    }
});