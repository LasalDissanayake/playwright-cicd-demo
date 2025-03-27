import { test, expect } from '@playwright/test';

test('Check Google homepage title', async ({ page }) => {
  await page.goto('https://www.google.com');
  const title = await page.title();
  expect(title).toBe('Google');
});

test('Search functionality', async ({ page }) => {
  await page.goto('https://www.google.com');
  await page.fill('input[name="q"]', 'Playwright');
  await page.press('input[name="q"]', 'Enter');
  await expect(page.locator('h3')).toHaveText(/Playwright/, { timeout: 5000 });
});