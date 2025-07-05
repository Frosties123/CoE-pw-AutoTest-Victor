import { Page } from "playwright";
import { Navigation } from "./navigation";
import { RegisterFormComponent } from "./components/registerForm.component";

export class PageManager {

    protected readonly navigation: Navigation;
    protected readonly registerFormComponent: RegisterFormComponent;

    constructor(page: Page) {
        this.navigation = new Navigation(page);
        this.registerFormComponent = new RegisterFormComponent(page);
    }

    onNavigation() {
        return this.navigation;    
    }

    onRegisterForm() {
        return this.registerFormComponent;
    }
}