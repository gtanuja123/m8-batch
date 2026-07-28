import {test,expect} from "@playwright/test"
import path from "node:path"

test('add candidate',async({page})=>
{
    let username="allmpoef"
    //! user login
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.fill('[name="username"]',"Admin")
    await page.fill('[name="password"]',"admin123")
    await page.click('[type="submit"]')

     await page.click('//span[text()="Recruitment"]')
    await page.click("//button[text()='Add']")
    await page.waitForTimeout(5000)

    await page.fill('[name="firstName"]',"tanuja")
    await page.fill('[name="lastName"]',"girish")
      await page.click('(//div[@class="oxd-select-text--after"])[1]')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press("Enter")
    await page.fill('(//input[@class="oxd-input oxd-input--active" and @placeholder="Type here"])[1]',"Tanu@gmail.com")
    await page.locator('[type="file"]').setInputFiles(path.join(__dirname,"../../pic/pic.pdf")
    
)
    

})