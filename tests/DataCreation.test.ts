import {Browser,BrowserContext, chromium, Page} from "playwright";
import 'jest';
describe("launch browser", ()=>{
    let browser : Browser;
    let context : BrowserContext;
    let page : Page;

    beforeAll (async()=>{
        browser = await chromium.launch({
            headless:false
        })
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('http://192.168.1.2:4202/login');
        })

        test("Valid Login", async()=>{
            await page.fill("//input[@formcontrolname='name']",'admin');
            await page.fill("//input[@formcontrolname='password']",'admin')
            await page.click("text=Login");
        })
       

        test("Create Customer", async()=>{
            await page.click("//ul[@class='nav']//following::li[2]")
            await page.click("//span[contains(text(),'Add Client')]")
            await page.fill("//input[@formcontrolname='name']","Widelast")
            await page.fill("//input[@formcontrolname='reg_no']","001423")
            await page.fill("//input[@formcontrolname='tax_no']","451233")
            await page.fill("//textarea[@formcontrolname='about']","IT solutions")
            await page.fill("//input[@formcontrolname='phone_number']","7412356897")
            await page.fill("//input[@formcontrolname='email']","gowri@widelast.com")
            await page.fill("//input[@formcontrolname='address_line1']","5/43")
            await page.fill("//input[@formcontrolname='address_line2']","Indra nager")
            await page.fill("//input[@formcontrolname='city']","Coimbatore")
            await page.fill("//input[@formcontrolname='zipcode']","641031")
            await page.fill("//input[@formcontrolname='state']","Tamilnadu")
            await page.fill("//input[@formcontrolname='country']","India")
            await page.click("text= Save")
        })

})