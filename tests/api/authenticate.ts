import { APIRequestContext, expect } from "@playwright/test";
import { User } from "../model/user";

export async function authenticateUser(request: APIRequestContext, user: User) {
    console.log(`Login Api - Authenticating user: ${user.userName}`);
    console.log(`Login Api - Password: ${user.password}`);
    const response = await request.get(`https://parabank.parasoft.com/parabank/services/bank/login/${user.userName}/${user.password}`);
    console.log(`Login Api - Authentication response status: ${response.status()}`);
    const body = await response.body();
    expect(response.ok()).toBeTruthy();
    return response;
}