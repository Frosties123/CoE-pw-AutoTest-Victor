import { Locator, Page } from "playwright";
import { User } from "../../model/user";

export class RegisterFormComponent {
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly addressInput: Locator;
    readonly cityInput: Locator;
    readonly stateInput: Locator;
    readonly zipCodeInput: Locator;
    readonly phoneNumberInput: Locator;
    readonly socialSecurityNumberInput: Locator;
    readonly userNameInput: Locator;
    readonly passwordInput: Locator;
    readonly confirmPasswordInput: Locator;
    readonly submitButton: Locator;
    
    constructor(page: Page) {
        this.firstNameInput = page.locator('#customer\\.firstName');
        this.lastNameInput = page.locator('#customer\\.lastName');
        this.addressInput = page.locator('#customer\\.address\\.street');
        this.cityInput = page.locator('#customer\\.address\\.city');
        this.stateInput = page.locator('#customer\\.address\\.state');
        this.zipCodeInput = page.locator('#customer\\.address\\.zipCode');
        this.phoneNumberInput = page.locator('#customer\\.phoneNumber');
        this.socialSecurityNumberInput = page.locator('#customer\\.ssn');
        this.userNameInput = page.locator('#customer\\.username');
        this.passwordInput = page.locator('#customer\\.password');
        this.confirmPasswordInput = page.locator('#repeatedPassword');
        //this.submitButton = page.locator('button[type="submit"][value="Register"]');
        this.submitButton = page.locator('//input[@value="Register"]');
    }

    async fillForm(user: User) {
        const password = user.password;
        await this.firstNameInput.fill(user.firstName);
        await this.lastNameInput.fill(user.lastName);
        await this.addressInput.fill(user.address);
        await this.cityInput.fill(user.city);
        await this.stateInput.fill(user.state);
        await this.zipCodeInput.fill(user.zipCode);
        await this.phoneNumberInput.fill(user.phoneNumber);
        await this.socialSecurityNumberInput.fill(user.socialSecurityNumber);
        await this.userNameInput.fill(user.userName);
        await this.passwordInput.fill(password);
        await this.confirmPasswordInput.fill(password);
        await this.submitButton.click();
    }
}