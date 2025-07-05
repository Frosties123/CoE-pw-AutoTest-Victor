import { test as base, expect } from '@playwright/test'
import { PageManager } from "../pageObjects/pagemanager"
import { createUser, User } from '../model/user'

export type TestOptions = {
    pageManager: PageManager;
    user: User;
}

export const test = base.extend<TestOptions>({
    pageManager: async ({ page }, use) => {
        let pm = new PageManager(page)
        await use(pm)
    }, 
    user: async ({}, use) => {
   const user = createUser();
       await use(user)
   }
})