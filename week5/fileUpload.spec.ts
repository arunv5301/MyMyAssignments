import test from "@playwright/test";
test("file upload test", async({page})=>{
await page.goto("https://www.naukri.com/registration/createAccount");
await page.locator("//h2[@class='main-3']").first().click();
await page.locator("//input[@type='file']").setInputFiles('./testData/PVR assignment.txt');
await page.waitForTimeout(3000);


})