import test from "@playwright/test"
test("Auto Alert", async({page})=>{
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("(//span[contains(text(),'Show')])[2]").click()
})
test("Alert page.once", async({page})=>{
    page.once('dialog', alertType=>{
        const type=alertType.type()
        console.log(type)
        
        const mes=alertType.message()
        console.log(mes)
        
        alertType.accept()
    })
    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator(".ui-button-text.ui-c").first().click()
    await page.locator("(//span[text()='Show'])[2]").click()
})
test("Alert type page.on", async({page})=>{
    page.on('dialog', alertType=>{
        const alertTypeValue=alertType.type()
        console.log("Alert Type: " + alertTypeValue)
        
        const mes=alertType.message()
        console.log("Alert Message: " + mes)

      if(alertTypeValue==='alert'){
          alertType.accept()
      }
      else if(alertTypeValue==='confirm'){
          alertType.dismiss()
      }
      else (alertTypeValue==='prompt'){
          alertType.accept("playwright")
      }
        await page.goto("https://www.leafground.com/alert.xhtml")
         await page.locator(".ui-button-text.ui-c").first().click()

         await page.locator("(//span[text()='Show'])[2]").click()

         await page.locator("(//span[text()='Show'])[5]").click()
    })
    
})