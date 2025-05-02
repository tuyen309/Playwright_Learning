import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/YouTube/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.youtube.com/');

  // Click the get started link.
  await page.locator('//a[@title="Shorts"]//span[text()="Shorts"]').click();

  // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Try searching to get started' })).toBeVisible();
});
