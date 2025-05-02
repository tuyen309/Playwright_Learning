# Playwright_Learning
Command::::
Running test: npx playwright test
HTML Test Report: npx playwright show-report
Running Test UI Mode: npx playwright test --ui

Action	Description::::
locator.check()	Check the input checkbox
locator.click()	Click the element
locator.uncheck()	Uncheck the input checkbox
locator.hover()	Hover mouse over the element
locator.fill()	Fill the form field, input text
locator.focus()	Focus the element
locator.press()	Press single key
locator.setInputFiles()	Pick files to upload
locator.selectOption()	Select option in the drop down

Assertion	Description:::::::
expect(locator).toBeChecked()	Checkbox is checked
expect(locator).toBeEnabled()	Control is enabled
expect(locator).toBeVisible()	Element is visible
expect(locator).toContainText()	Element contains text
expect(locator).toHaveAttribute()	Element has attribute
expect(locator).toHaveCount()	List of elements has given length
expect(locator).toHaveText()	Element matches text
expect(locator).toHaveValue()	Input element has value
expect(page).toHaveTitle()	Page has title
expect(page).toHaveURL()	Page has URL