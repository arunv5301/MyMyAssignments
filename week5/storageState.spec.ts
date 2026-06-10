import test from "@playwright/test"
test("Storage State", async({page})=>{
    test.setTimeout(60000);
    await page.goto("https://leaftaps.com/opentaps/control/main");
    await page.locator("//input[@id='username']").fill("democsr");
    await page.locator("//input[@id='password']").fill("crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();

    await page.context().storageState({path: "Data/ST.Login.json"});
    await page.waitForTimeout(3000);


})