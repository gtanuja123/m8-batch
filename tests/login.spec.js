import {test} from "@playwright/test"
import data from '../testdata/login.json'
import { loginpage } from "../../pages/index1"

test("test1 ",async({page})=>{
    let obj = new loginpage(page)
    await page.goto(data.url)
    await page.username.fill(data.username)
    await page.password.fill(data.password)
    await page.click()
})