import { faker } from "@faker-js/faker";

export type User = {

    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    socialSecurityNumber: string;
    userName: string;
    password: string;
    confirmPassword: string;

};

export function createUser() : User {
    // Generate a unique timestamp to avoid duplicate usernames, however, this might not be necessary for parabank website
    //const timestamp = new Date().toISOString().replace(/[-:.TZ]/g, '');
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        socialSecurityNumber: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
        // Uncomment the next line to generate a unique username with timestamp
        //userName: faker.internet.displayName()+`_${timestamp}`,
        userName: faker.internet.displayName(),
        password: faker.internet.password(),
        confirmPassword: faker.internet.password()
    }
    return user;
}