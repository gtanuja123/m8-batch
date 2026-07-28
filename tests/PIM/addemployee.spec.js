import {test,expect} from "@playwright/test"
import path from "node:path"

test('add employee',async({page})=>
{
    let first="anitha"
    let last="girish"
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.fill('[name="username"]',"Admin")
    await page.fill('[name="password"]',"admin123")
    await page.click('[type="submit"]')

    await page.click('//span[text()="PIM"]')
    await page.click("//a[text()='Add Employee']")
    await page.waitForTimeout(5000)
    await page.fill('[name="firstName"]',first)
    await page.fill('[name="lastName"]',last)
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[2]',"4697")
    await page.locator('[role="none"]').nth(1).waitFor({state:"visible"})
    await page.locator('[type="file"]').setInputFiles(path.join(__dirname,"../../pic/download.jpg"))
    await page.waitForTimeout(5000)
    await page.click('[type="submit"]')

    await page.locator('[class="oxd-text oxd-text--h6 --strong"]').waitFor({state:"visible"})
    await expect(await page.locator('[class="oxd-text oxd-text--h6 --strong"]').textContent()).toBe(first+' '+last)
    console.log(await page.locator('[class="oxd-text oxd-text--h6 --strong"]').textContent())
  
})