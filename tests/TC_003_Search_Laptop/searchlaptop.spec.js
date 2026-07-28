import {test,expect} from '@playwright/test'
import path from "node:path"
import data from "../../testdata/common data.json" 
import { readFile } from 'node:fs';
import {Workbook} from "exceljs"

// test("searchlaptop",async({page})=>
// {
//      await page.goto('https://demowebshop.tricentis.com/ ')
//     await page.click('[class="ico-login"]')
//     await page.fill('[id="Email"]',"gtanuja2000@gmail.com")
//     await page.fill('[name="Password"]',"Tanu@1234")
//     await page.click('[type="checkbox"]')
//     await page.click('[value="Log in"]')


//     await page.locator('[id="small-searchterms"]').fill("laptop")
//     await page.locator('[value="Search"]').click()
//     await page.waitForTimeout(3000)
//    await expect(await page.locator("//a[text()='14.1-inch Laptop']")).toContainText('Laptop')
//     await expect(await page.locator("//a[text()='14.1-inch Laptop']").textContent()).toBe('14.1-inch Laptop')
// })

/********************Json data********************* */
test("searchlaptop",async({page})=>
{
    //~reading json Data from file
    let url=data.url;
    let email= data.email;
    let password = data.password;
    let first=data.firstname;
    let last= data.lastname;
    
    //? reading data from the excel
    //~ create object for workbook
     let book = await new Workbook()
     //~ read the data from Excel => xlsx.readfile(path)
     await book.xlsx.readFile(path.join(__dirname,"../../testdata/Book1.xlsx"))
     //~ select the sheet
     let sheet =await book.getWorksheet("Search_Data")
     //~ select row and column
     let searchItem= await sheet.getRow(5).getCell(2).toString()
     let expectedresults= await sheet.getRow(5).getCell(3).toString()
    
     await page.goto(url)
    await page.click('[class="ico-login"]')
    await page.fill('[id="Email"]',email)
    await page.fill('[name="Password"]',password)
    await page.click('[type="checkbox"]')
    await page.click('[value="Log in"]')


    await page.locator('[id="small-searchterms"]').fill(searchItem)
    await page.locator('[value="Search"]').click()
    await page.waitForTimeout(3000) 
   await expect(await page.locator("//a[text()='14.1-inch Laptop']")).toContainText(expectedresults)
   //  await expect(await page.locator("//a[text()='14.1-inch Laptop']").textContent()).toBe('14.1-inch Laptop')
})


// Search : Laptop
// Steps:
// Enter Laptop in search box.
// Click Search.
// Expected Result
// Matching products displayed.
// validate product name 