import test from "@playwright/test"
test("Storage State", async({page})=>{

    test.use({storageState: "Date/ST.Login.json"});
    await page.goto("https://leaftaps.com/opentaps/control/login");
    await page.waitForTimeout(3000);
    await page.locator("[text='CRM/SFA']").click();
    await page.waitForTimeout(3000);

})

test("Storage State", async({page})=>{

    test("Storage State2", async({page})=>{
        test.setTimeout(60000);
        await page.goto("https://leaftaps.com/opentaps/control/login");
        await page.waitForTimeout(3000);
        await page.locator("[text='CRM/SFA']").click();
        await page.locator("//a[text()='Accounts']").click();
        await page.waitForTimeout(3000);
    })
})