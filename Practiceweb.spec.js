const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./pages/Login');
require('dotenv').config();

test('Empty fields login page', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login('', '');
    await expect(loginPage.errorMessage).toBeVisible();
});

test('Valid login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.login(process.env.PRACTICE_USERNAME, process.env.PRACTICE_PASSWORD);
    await expect(loginPage.successMessage).toBeVisible();
});