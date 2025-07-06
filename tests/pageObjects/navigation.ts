import { Locator, Page } from "playwright";
import { User } from "../model/user";

export class Navigation {

    readonly page: Page;
    readonly registerLink: Locator;
    readonly logoutLink: Locator;
    readonly loginUserNameInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerLink = page.locator('[href="register.htm"]').filter({ hasText: 'Register' });
        this.logoutLink = page.locator('[href="logout.htm"]').filter({ hasText: 'Log Out' });
        this.loginUserNameInput = page.locator('input[name="username"]');
        this.loginPasswordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('//input[@type="submit" and @value="Log In"]');
    }
    
    async goto() {
        await this.page.goto('https://parabank.parasoft.com/');
        await this.page.waitForLoadState('load');
        
    }

    async navigateToRegisterForm() {
        await this.registerLink.click();
        await this.page.waitForLoadState('load');
    }

    async login(user: User) {
        await this.loginUserNameInput.fill(user.userName);
        await this.loginPasswordInput.fill(user.password);
        await this.loginButton.click();
        await this.page.waitForLoadState('load');
    }

    async logout() {
        await this.logoutLink.click();
        await this.page.waitForLoadState('load');
    }
    
}