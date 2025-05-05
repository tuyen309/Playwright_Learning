## Playwright Test Commands
| Description               | Command                             |
|---------------------------|-------------------------------------|
| Running test              | `npx playwright test`              |
| HTML Test Report          | `npx playwright show-report`       |
| Running Test UI Mode      | `npx playwright test --ui`         |
|Recording a Test           |  `npx playwright codegen [link] --> npx playwright codegen https://www.saucedemo.com/` |
|Run tests in headed mode   |`npx playwright test --headed`|
|Run tests on different browsers| `npx playwright test --project webkit --project firefox`|
|Run a single test file| `npx playwright test [file name] --> npx playwright test demo.spec.ts`|
|Run a set of test files from different directories| `npx playwright test [path 1] [path 2] --> npx playwright test tests_demo/practice_first/ tests_demo/practice_thrid/`|
|Run files that have file of name| `npx playwright test [name of file] --> npx playwright test practice_first practice_second`|
|Run a test with a specific title| `npx playwright test -g "[title of test]" --> npx playwright test -g "Login Page and Verify Login Successfully"`|
|Debug all tests| `npx playwright test --debug`|

## Playwright Locator Actions

| Action                      | Description                          |
|-----------------------------|--------------------------------------|
| `locator.check()`           | Check the input checkbox            |
| `locator.click()`           | Click the element                   |
| `locator.uncheck()`         | Uncheck the input checkbox          |
| `locator.hover()`           | Hover mouse over the element        |
| `locator.fill()`            | Fill the form field, input text     |
| `locator.focus()`           | Focus the element                   |
| `locator.press()`           | Press single key                    |
| `locator.setInputFiles()`   | Pick files to upload                |
| `locator.selectOption()`    | Select option in the drop-down      |

## Playwright Assertions

| Assertion                        | Description                          |
|-----------------------------------|--------------------------------------|
| `expect(locator).toBeChecked()`  | Checkbox is checked                  |
| `expect(locator).toBeEnabled()`  | Control is enabled                   |
| `expect(locator).toBeVisible()`  | Element is visible                   |
| `expect(locator).toContainText()`| Element contains text                |
| `expect(locator).toHaveAttribute()` | Element has attribute             |
| `expect(locator).toHaveCount()`  | List of elements has given length    |
| `expect(locator).toHaveText()`   | Element matches text                 |
| `expect(locator).toHaveValue()`  | Input element has value              |
| `expect(page).toHaveTitle()`     | Page has title                       |


## Playwright Configuration
- Basic Configuration: https://playwright.dev/docs/test-configuration#basic-configuration
- Filtering Tests: https://playwright.dev/docs/test-configuration#filtering-tests
- Advanced Configuration: https://playwright.dev/docs/test-configuration#advanced-configuration 
- Expect Options: https://playwright.dev/docs/test-configuration#expect-options

## Refactoring Your Tests with test fixtures
- Built-in fixtures
```typescript
import { test, expect } from '@playwright/test';

test('Check Title Page', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await expect(page).toHaveTitle(/Swag Labs/);
});
```
The { page } argument tells Playwright Test to setup the page fixture and provide it to your test function.
| Fixture      | Type                 | Description |
|-------------|----------------------|-------------|
| `page`      | `Page`                | Trang được cô lập cho mỗi lần chạy kiểm thử. |
| `context`   | `BrowserContext`      | Ngữ cảnh trình duyệt được cô lập cho mỗi lần chạy kiểm thử. Fixture `page` cũng thuộc về ngữ cảnh này. [Tìm hiểu cách cấu hình context](https://playwright.dev/docs/api/class-browsercontext). |
| `browser`   | `Browser`             | Trình duyệt được chia sẻ giữa các bài kiểm thử để tối ưu tài nguyên. [Tìm hiểu cách cấu hình browser](https://playwright.dev/docs/api/class-browser). |
| `browserName` | `string`            | Tên của trình duyệt đang chạy kiểm thử, có thể là `chromium`, `firefox` hoặc `webkit`. |
| `request`   | `APIRequestContext`   | Phiên bản **APIRequestContext** được cô lập cho