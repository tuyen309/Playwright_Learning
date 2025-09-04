import { test, expect } from '@playwright/test';

test('Check Title Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

const users = [
  { username: 'standard_user', password: 'secret_sauce' },
  { username: 'locked_out_user', password: 'secret_sauce' },
  { username: 'problem_user', password: 'secret_sauce' },
];

users.forEach(({ username, password }) => {
  test(`Login test for ${username}`, async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.locator('#user-name').fill(username);
    await page.locator('#password').fill(password);
    await page.locator('#login-button').click();

    const isLockedOut = username === 'locked_out_user';
    if (isLockedOut) {
      await expect(page.locator('[data-test="error"]')).toBeVisible();
    } else {
      await expect(page.locator('.app_logo')).toHaveText('Swag Labs');
    }
  });
});