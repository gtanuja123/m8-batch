 import {test,expect} from '@playwright/test'
import path from "node:path"
import data from "../../testdata/common data.json" 
import { readFile } from 'node:fs';
import {Workbook} from "exceljs"
/*****************************************************json data******************** */


test("add book",async({page})=>
    
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
     let sheet =await book.getWorksheet("cart_data")
     //~ select row and column
     let searchItem= await sheet.getRow(3).getCell(2).toString()
     let expectedresults= await sheet.getRow(2).getCell(3).toString()
     await page.goto(url)
    await page.click('[class="ico-login"]')
    await page.fill('[id="Email"]',email)
    await page.fill('[name="Password"]',password)
    await page.click('[type="checkbox"]')
    await page.click('[value="Log in"]')

    await page.click('(//a[@href="/books"])[3]')
    await page.click(`//a[text()="${searchItem}"]/ancestor::div[@class="details"]//input[@value="Add to cart"]`)
   // await page.click('[id="add-to-cart-button-13"]')
    await expect(await page.locator('[class="content"]')).toBeVisible()

     const text=await page.locator('[class="content"]').textContent()
    let text2=text.trim();
    await expect(text2).toBe(expectedresults)
    console.log(await page.locator('[class="content"]').textContent())

        let count = await page.locator('[class="cart-qty"]').textContent()
         //await expect(await page.locator('[class="cart-qty"]').textContent()).toBe(count+1)
    if(await page.locator('[class="cart-qty"]').textContent()>count)
        console.log("Cart value increased from ",count," to ",await page.locator('[class="cart-qty"]').textContent());

    
})

// Books

// Precondition
// User logged in.
// Steps
// Login to application.
// Navigate to Books category.
// Open "Computing and Internet" book.
// Click "Add to cart".
// Expected Result
// Success notification should be displayed.
// Cart count should increase. 
