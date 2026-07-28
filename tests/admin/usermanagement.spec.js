import {test,expect} from "@playwright/test"
import path from "node:path"

test('add user',async({page})=>
{
    let username="allmpoef"
    //! user login
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login ")
    await page.fill('[name="username"]',"Admin")
    await page.fill('[name="password"]',"admin123")
    await page.click('[type="submit"]')
 //! navigate to usermanagement 
     await page.click('//span[text()="Admin"]')
    await page.click("//button[text()=' Add ']")
    await page.waitForTimeout(2000)

    await page.click('(//div[@class="oxd-select-text--after"])[1]')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press("Enter")


    await page.fill('[placeholder="Type for hints..."]',"a")
    await page.waitForTimeout(2000)
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press("Enter")
    await page.click('(//div[@class="oxd-select-text--after"])[2]')
    await page.keyboard.press('ArrowDown')
    await page.keyboard.press("Enter")
    await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(username)
        await page.waitForTimeout(2000)
        await page.keyboard.press('Tab')
        await page.keyboard.type("Tanu@1234")
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[3]',"Tanu@1234")
 
    await page.click('//button[@type="submit"]')
 await page.waitForTimeout(8000)
    await page.fill('(//input[@class="oxd-input oxd-input--active"])[2]',username)
    await page.click('[type="submit"]')
   // await page.locator('//div[@class="oxd-table-cell oxd-padding-cell" and @role="cell"]').waitFor({state:"visible"})
    await expect(await page.locator('//div[@class="oxd-table-cell oxd-padding-cell" and @role="cell"]').nth(1).textContent()).toBe(username)
    console.log(await page.locator('//div[@class="oxd-table-cell oxd-padding-cell" and @role="cell"]').nth(1).textContent())

    
})