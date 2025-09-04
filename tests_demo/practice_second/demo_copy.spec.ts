import { expect } from '@playwright/test';
import { test } from '../users';

test('Check Title Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login1 Page and Verify Login Successfully', async ({ page, users }) => {  
  console.log("kkkk1111111111111111",users[1]);
  const user = users[1];
  // console.log("kkkk",user);
  const title_error = '//h3[text()="Epic sadface: Sorry, this user has been locked out."]';
  await page.goto('https://www.saucedemo.com/');
  await page.locator('//input[@id="user-name"]').fill(user.username);
  await page.locator('//input[@id="password"]').fill(user.password);
  await page.locator('//input[@id="login-button"]').click();
  await expect(page.locator(title_error)).toBeVisible();
  //await browser.close();
});
