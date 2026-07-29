export class registration{
    constructor(page){
        this.page=page;
        this.register= page.locator('//a[text()="Register"]')
        this.gender=page.locator('[id="gender-female"]')
        this.first = page.locator('[id="FirstName"]')
        this.last = page.locator('[id="LastName"]')
        this.email= page.locator('[name="Email"]')
        this.password= page.locator('[id="Password"]')
        this.cnfmpassword = page.locator('[name="ConfirmPassword"]')
        this.regbtton=page.locator('[id="register-button"]')
        this.resulttext=page.locator('[class="result"]')

    }

    async launchurl(url)
    {
    await this.page.goto(url)
    }
     async filldetails(firstname,lastname,email,password)
     {
      await this.register.click()
      await this.gender.click()
      await this.first.fill(firstname)
      await this.last.fill(lastname)
      await this.email.fill(email)
      await this.password.fill(password)
      await this.cnfmpassword.fill(password)
      await this.regbtton.click()
    //    const text=await this.resulttext.textContent()
    //       let text2=text.trim();
    //       await expect(text2).toBe('Your registration completed')
    //       console.log(await this.resulttext.textContent())
     }
}



