import {test,expect} from '@playwright/test'
import data from "../../testdata/common data.json"

// test("login",async({page})=>
// {
//     await page.goto('https://demowebshop.tricentis.com/ ')
//     await page.click('[class="ico-login"]')
//     await page.fill('[id="Email"]',"gtanuja2000@gmail.com")
//     await page.fill('[name="Password"]',"Tanu@1234")
//     await page.click('[type="checkbox"]')
//     await page.click('[value="Log in"]')

// })

/********************using json************************ */
test("login",async({page})=>

{
     //~reading json Data from file

     let url=data.url;
         let email= data.email;
         let password = data.password;
         let first=data.firstname;
         let last= data.lastname;
    await page.goto(url)
    await page.click('[class="ico-login"]')
    await page.fill('[id="Email"]',email)
    await page.fill('[name="Password"]',password)
    await page.click('[type="checkbox"]')
    await page.click('[value="Log in"]')

})