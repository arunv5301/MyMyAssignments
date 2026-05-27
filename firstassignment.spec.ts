import test from "@playwright/test";
test("Luanch the browser", async ({ page}) =>
{
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr")
    await page.locator("[name='PASSWORD']").fill("crmsfa")
    await page.locator(".decorativeSubmit").click();
    console.log("The page title is: " + await page.title());
    await page.locator('text=CRM/SFA').click();
})