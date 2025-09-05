import { expect, test } from '@playwright/test';

test('Check Title Page', async ({ page }) => {
  console.log("kkkkkkkkkkkkkkkkkkkkk",process.env.STAGING);
  await page.goto('/');
  await expect(page).toHaveTitle(/Swag Labs/);
});

test('Login1 Page and Verify Login Successfully', async ({ page }) => {  
  const title_error = '//h3[text()="Epic sadface: Sorry, this user has been locked out."]';
  await page.goto('/');
  await page.locator('//input[@id="user-name"]').fill(process.env.USER_NAME);
  await page.locator('//input[@id="password"]').fill(process.env.PASSWORD);
  await page.locator('//input[@id="login-button"]').click();
  await expect(page.locator(title_error)).toBeVisible();
  //await browser.close();
});


// Command to run this test case: 
// $env:USER_NAME="locked_out_user"; $env:PASSWORD="secret_sauce"; npx playwright test practice_five
//$env:USER_NAME="locked_out_user"; $env:PASSWORD="secret_sauce"; $env:STAGING=1 ; npx playwright test practice_five

