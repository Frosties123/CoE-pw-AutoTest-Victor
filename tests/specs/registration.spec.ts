import { test } from "../fixtures/fixture";
import { createUser } from "../model/user";

test.beforeEach(async ({ pageManager }) => {

    await pageManager.onNavigation().goto();
    await pageManager.onNavigation().navigateToRegisterForm();

});

test("Registration, logout and login", async ({ pageManager }) => {

    const newUser = createUser();
    await pageManager.onRegisterForm().fillForm(newUser);

});