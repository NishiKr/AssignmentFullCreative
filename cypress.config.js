const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

module.exports = defineConfig({
    viewportWidth: 1366,
    viewportHeight: 768,
    numTestsKeptInMemory: 5,
    e2e: {
        setupNodeEvents(on, config) {
            getCompareSnapshotsPlugin(on, config);
        },
        baseUrl: "http://www.htmlcanvasstudio.com/"
    },
    env: {
        hideXhr: true
    }
})