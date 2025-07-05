import { faker } from "@faker-js/faker";

export type User = {

    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
    socialSecurityNumber: number;
    userName: string;
    password: string;
    confirmPassword: string;

};

export function createUser() : User {
    const user = { 
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        socialSecurityNumber: faker.number.int({ min: 100000000, max: 999999999 }),
        userName: faker.internet.displayName(),
        password: faker.internet.password(),
        confirmPassword: faker.internet.password()
    }
    return user;
}