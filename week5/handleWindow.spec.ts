import test from "@playwright/test";
test("Handle single window", async ({ page, context }) => {

    await page.waitForTimeout(3000);
    await page.goto("https://www.leafground.com/window.xhtml");
    //step 1: create promise
    const paWindow= context.waitForEvent("page");
    await page.waitForTimeout(3000);
    //step 2: do the action
    await page.locator("//span[text()='Open']").click();
    //step 3: resolve the promise(switch to child window)
    const chWindow=await paWindow
    const chTitle = await chWindow.title();
    console.log(chTitle);
    await page.waitForTimeout(3000);
    await chWindow.locator("//input[@id='email']").fill("arunv222@gmail.com");
    await page.bringToFront();
    await page.waitForTimeout(3000);

    await page.locator("//span[text()='Open Multiple']").click();

})
