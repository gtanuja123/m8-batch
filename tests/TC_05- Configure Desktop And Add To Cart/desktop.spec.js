// Step No	Action
// 1	Launch application
// 2	Login with valid credentials
// 3	Navigate to Computers → Desktops
// 4	Click "Build Your Own Computer"
// 5	Select Processor from dropdown
// 6	Select RAM from dropdown
// 7	Select HDD radio button
// 8	Select Software checkboxes
// 9	Click Add To Cart
// Expected Result
// Product should be added successfully.
// Success notification displayed.
// Cart quantity increased. 

import {test,expect} from '@playwright/test'
import path from "node:path"
import data from "../../testdata/common data.json" 
import { readFile } from 'node:fs';
import {Workbook} from "exceljs"


// test.only("desktop",async({page})=>
    
//{
//      await page.goto(url)
//     await page.click('[class="ico-login"]')
//     await page.fill('[id="Email"]',email)
//     await page.fill('[name="Password"]',password)
//     await page.click('[type="checkbox"]')
//     await page.click('[value="Log in"]')

//     await page.locator('//a[contains(text(),"Computers")]').first().hover()
//     await page.locator('//a[contains(text(),"Desktops")]').first().click
//     await page.locator('//a[contains(text(),"Build your own computer")]').click()
//     await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:14}) // selecting the processor
//     await page.locator('[id="product_attribute_16_6_5"]').selectOption( {value:17}) // selecing a ram
//     await page.locator('[id="product_attribute_16_3_6_18"]').click()
//     await page.locator('[id="product_attribute_16_8_8_23"]').click()
//     await page.click('[id="add-to-cart-button-16"]')
//         await page.locator('//p[text()="The product has been added to your "]').waitFor()
//     let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
//     await expect(success).toContain('The product has been added')
// })


test("desktop",async({page})=>
    
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
     let sheet =await book.getWorksheet("Computer_config")
     //~ select row and column
     let processor= await sheet.getRow(2).getCell(2).toString()
     let ram= await sheet.getRow(2).getCell(3).toString()
     let hdd= await sheet.getRow(2).getCell(4).toString()
     let oss= await sheet.getRow(2).getCell(5).toString()
     let expectedmessage= await sheet.getRow(2).getCell(6).toString()
     await page.goto(url)
    await page.click('[class="ico-login"]')
    await page.fill('[id="Email"]',email)
    await page.fill('[name="Password"]',password)
    await page.click('[type="checkbox"]')
    await page.click('[value="Log in"]')

    await page.locator('//a[contains(text(),"Computers")]').first().hover()
    await page.locator('//a[contains(text(),"Desktops")]').first().click
    await page.locator('//a[contains(text(),"Build your own computer")]').click()
    await page.locator('[id="product_attribute_16_5_4"]').selectOption({value:processor}) // selecting the processor
    await page.locator('[id="product_attribute_16_6_5"]').selectOption( {value:ram}) // selecing a ram
    await page.locator(`[value="${hdd}"]`).click()
    await page.locator(`[value="${oss}"]`).click()
    await page.click('[value="23"]')
    await page.click('[id="add-to-cart-button-16"]')
        await page.locator('//p[text()="The product has been added to your "]').waitFor()
    let success=await page.locator('//p[text()="The product has been added to your "]').textContent()
    await expect(success).toContain(expectedmessage)
})