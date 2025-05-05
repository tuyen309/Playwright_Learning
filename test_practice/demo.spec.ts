import { test, expect } from '@playwright/test';

test('Check Title Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});