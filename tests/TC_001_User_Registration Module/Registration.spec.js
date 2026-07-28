import {test,expect} from '@playwright/test'
import data from "../../testdata/common data.json"

// test("registration",async({page})=>
// {
//     //~reading json Data from file
//     await page.goto('https://demowebshop.tricentis.com/ ')
//     await page.click('//a[text()="Register"]')
//     await page.click('[id="gender-female"]')
//     await page.fill('[id="FirstName"]',"Tanuja")
//     await page.fill('[id="LastName"]',"Girish")
//     await page.fill('[name="Email"]',"gtanuja2000@gmail.com")
//     await page.fill('[id="Password"]',"Tanu@1234")
//     await page.fill('[name="ConfirmPassword"]',"Tanu@1234")
//     await page.click('[id="register-button"]')
//     const text=await page.locator('[class="result"]').textContent()
//     let text2=text.trim();
//     await expect(text2).toBe('Your registration completed')
//     console.log(await page.locator('[class="result"]').textContent())
// })



/*******************using JSON data****************** */

test("registration",async({page})=>
{
    //~reading json Data from file
    let url=data.url;
    let email= data.email;
    let password = data.password;
    let first=data.firstname;
    let last= data.lastname;
    await page.goto(url)
     await page.goto('https://demowebshop.tricentis.com/ ')
    await page.click('//a[text()="Register"]')
    await page.click('[id="gender-female"]')
    await page.fill('[id="FirstName"]',first)
    await page.fill('[id="LastName"]',last)
    await page.fill('[name="Email"]',email)
    await page.fill('[id="Password"]',password)
    await page.fill('[name="ConfirmPassword"]',password)
    await page.click('[id="register-button"]')
    const text=await page.locator('[class="result"]').textContent()
    let text2=text.trim();
    await expect(text2).toBe('Your registration completed')
    console.log(await page.locator('[class="result"]').textContent())

})