import test, { chromium, firefox, webkit } from "@playwright/test";
test("launch browser", async () => {
  test.setTimeout(60000);
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.facebook.com/");
  const title = await page.title();
  console.log("The Page Title is :"+title);
})