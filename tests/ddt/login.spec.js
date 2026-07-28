import {test} from "@playwright/test"
import data from '../../testdata/login.json'
import { loginpage } from "../../pages/index1"

test(" ",async({page})=>{
    let obj = new loginpage(page)
    await page.goto(data.url)
    await page.username.fill(data.username)
    await page.password.fill(data.password)
    await page.click()
})

test.only('methods',async({page})=>{
    let obj1= new loginpage(page)
    await obj1.launch(data.url)
    await obj1.enter_details(data.username,data.password)
})
