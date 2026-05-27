import test from "@playwright/test";
test.use({ headless: false });
test("page fixture", async ({page}) => {
    test.setTimeout(60000);
    await page.goto("https://www.facebook.com/");
    const title = await page.title();
    console.log("The page title is: " + title);
})

