import test from "@playwright/test";
test("Handle single window", async ({ page, context }) => {

    await page.waitForTimeout(3000);
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    const searchBox=page.locator("//input[@id='twotabsearchtextbox']");
    await searchBox.fill("phone");
    await searchBox.press("Enter");
    //step 1: create promise
    const parentWindow=context.waitForEvent("page");
    //step 2: do the action
    await page.locator("(//img[@class='_c2Itd_image_3UiYm _c2Itd_center_23yFZ'])[1]").click();
    //step 3: resolve the promise(switch to child window)
    const childWindow=await parentWindow;
    const childTitle=await childWindow.title();
    console.log(childTitle);
    await page.waitForTimeout(3000);
    const price=await childWindow.locator("//span[@id='apex-pricetopay-accessibility-label']").innerText();
    console.log(price);
    
    await page.bringToFront();
    await page.waitForTimeout(3000);
    await page.locator("(//a[text()='Mobiles'])[1]").click();




})