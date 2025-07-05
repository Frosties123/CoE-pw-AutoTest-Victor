import { Locator, Page } from "playwright";
import { User } from "../../model/user";

export class RegisterComponent {
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly checkboxInput: Locator;
    readonly registerButton: Locator;
    
    constructor(page: Page) {
        this.fullNameInput = page.locator('#input-name');
        this.emailInput = page.locator('#input-email');
        this.passwordInput = page.locator('#input-password');
        this.confirmPasswordInput = page.locator('#input-re-password');
        this.checkboxInput = page.locator('.custom-checkbox');
        this.registerButton = page.locator('button');
    }

    async fillForm(user: User) {
        
        const password = user.password;
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.checkboxInput.click({force:true});
        await this.registerButton.click();
    }
}