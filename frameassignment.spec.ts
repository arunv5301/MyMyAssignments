import test from '@playwright/test'


test("Handle the Frame", async({page})=>{

    await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")

    await page.waitForTimeout(3000)

    page.once('dialog', alertType=>{
        const type=alertType.type()
        console.log("Alert Type is:" +type)

        const msg=alertType.message()
        console.log("Alert Message is:" +msg)

        alertType.accept()
    })
    await page.frameLocator("//iframe[@id='iframeResult']").locator("//button[text()='Try it']").click()
})