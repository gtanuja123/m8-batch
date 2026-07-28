import {test,expect} from "@playwright/test"
import data from '../../testdata/common data.json'
import { registration } from "../../pages/index2"


test("url",async({page})=>
{
    let obj1=new registration(page)
    await obj1.launchurl(data.url)
})

test.only("filldetails",async({page})=>
{
    let obj2= new registration(page)
    await obj2.launchurl(data.url)
    await obj2.filldetails(data.firstname,data.lastname,data.email,data.password)
     const text=await page.locator('[class="result"]').textContent()
    let text2=text.trim();
    await expect(text2).toBe('Your registration completed')
    console.log(await page.locator('[class="result"]').textContent())

})
