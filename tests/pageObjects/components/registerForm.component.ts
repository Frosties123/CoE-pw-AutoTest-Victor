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
        // Using XPath to locate the submit button, as the original selector was not working
        //this.submitButton = page.locator('button[type="submit"][value="Register"]');
        this.submitButton = page.locator('//input[@value="Register"]');
    }

    async fillForm(user: User) {
        // Define the password variable outside the fill calls since a repeated password is required
        const password = user.password;
        // Adding a delay to ensure the inputs are filled in a human-like manner
        const delay = 500;
        await this.firstNameInput.fill(user.firstName);
        await this.firstNameInput.waitFor({ timeout: delay });
        await this.lastNameInput.fill(user.lastName);
        await this.lastNameInput.waitFor({ timeout: delay });
        await this.addressInput.fill(user.address);
        await this.addressInput.waitFor({ timeout: delay });
        await this.cityInput.fill(user.city);
        await this.cityInput.waitFor({ timeout: delay });
        await this.stateInput.fill(user.state);
        await this.stateInput.waitFor({ timeout: delay });
        await this.zipCodeInput.fill(user.zipCode);
        await this.zipCodeInput.waitFor({ timeout: delay });
        await this.phoneNumberInput.fill(user.phoneNumber);
        await this.phoneNumberInput.waitFor({ timeout: delay });
        await this.socialSecurityNumberInput.fill(user.socialSecurityNumber);
        await this.socialSecurityNumberInput.waitFor({ timeout: delay });
        await this.userNameInput.fill(user.userName);
        await this.userNameInput.waitFor({ timeout: delay });
        await this.passwordInput.fill(password);
        await this.passwordInput.waitFor({ timeout: delay });
        await this.confirmPasswordInput.fill(password);
        await this.confirmPasswordInput.waitFor({ timeout: delay });
        await this.submitButton.click();
        console.log("Username: " + user.userName);
        console.log("Password: " + password);
    }
}