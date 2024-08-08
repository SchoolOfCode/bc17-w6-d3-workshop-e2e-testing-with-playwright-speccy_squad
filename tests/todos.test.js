import { test, expect } from "@playwright/test";

// test('has title', async ({ page }) => {
//     await page.goto('https://playwright.dev/');

test("Make sure can navigate to URL", async ({ page }) => {
  await page.goto("http://localhost:3000/");
});
