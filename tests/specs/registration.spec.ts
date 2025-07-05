import { test } from "../fixtures/fixture";
import { User, createUser } from "../model/user";

test.beforeEach(async ({ pageManager }) => {

    await pageManager.onNavigation().goto();
    const newUser = createUser();

});

test("Registration, logout and login", async ({ pageManager }) => {

    await pageManager.onNavigation().navigateToRegisterForm();
    

});