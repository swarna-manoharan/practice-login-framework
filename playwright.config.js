const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './',
    use: {
        baseURL: 'https://practice.expandtesting.com',
    },
    headless: false
});

