import { Locator, Page } from "playwright";

export class Navigation {

    readonly page: Page;
    readonly registerLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('[href="register.htm"]').filter({ hasText: 'Register' });
    }
    
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/');
        await this.page.waitForLoadState('load');
        
    }

    async navigateToRegisterForm() {
        await this.registerLink.click();
        await this.page.waitForLoadState('load');
    }
    
}