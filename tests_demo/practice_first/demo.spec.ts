import { test, expect } from '@playwright/test';

test('Check Title Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login Page and Verify Login Successfully', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//input[@id="user-name"]').fill('standard_user');
  await page.locator('//input[@id="password"]').fill('secret_sauce');
  await page.locator('//input[@id="login-button"]').click();
  await expect(page.locator('//div[text()="Swag Labs"]')).toBeVisible();
});
