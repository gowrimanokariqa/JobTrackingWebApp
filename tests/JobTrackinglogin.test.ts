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
    
    //Login using invalid credentials
    test("Invalid Login", async()=>{
        await page.fill("//input[@formcontrolname='name']",'admin');
        await page.fill("//input[@formcontrolname='password']",'password')
        await page.click("text=Login");
        const toast = page.locator("//span[contains(text(),'Password Not Match')]"); 
        let message = toast.isEnabled();     
        console.log("The error message was "+ message)
    })

    //Login using the Valid credentials
    test("Valid Login", async()=>{
        await page.fill("//input[@formcontrolname='name']",'admin');
        await page.fill("//input[@formcontrolname='password']",'admin')
        await page.click("text=Login");
    })
})
