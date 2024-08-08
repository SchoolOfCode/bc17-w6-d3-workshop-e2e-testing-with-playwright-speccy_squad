import { test, expect } from "@playwright/test";

// test("Make sure can navigate to URL", async ({ page }) => {
//   await page.goto("http://localhost:3000/");
// });

test("Making sure we can select text box", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole('textbox', { name: 'New Todo:' }).fill('Hello');
});
