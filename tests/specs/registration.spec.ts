import { authenticateUser } from "../api/authenticate";
import { test } from "../fixtures/fixture";
import { createUser } from "../model/user";

test.beforeEach(async ({ pageManager }) => {

    await pageManager.onNavigation().goto();
    await pageManager.onNavigation().navigateToRegisterForm();

});

test("Registration, logout and login", async ({ pageManager, request }) => {

    const newUser = createUser();
    await pageManager.onRegisterForm().fillForm(newUser);
    console.log(`Test - Authenticating user from api: ${newUser.userName}`);
    const authenticatedUser = await authenticateUser(request, newUser);
    console.log(`Test - Login api response: ${authenticatedUser.status()}`);
    await pageManager.onNavigation().logout();
    await pageManager.onNavigation().login(newUser);

});