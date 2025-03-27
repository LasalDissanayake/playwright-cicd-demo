import { test, expect } from '@playwright/test';

test('Check Google homepage title', async ({ page }) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).toBe('Google');
});