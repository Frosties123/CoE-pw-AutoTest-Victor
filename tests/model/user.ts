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

// Function to generate a random number between min and max (inclusive), to avoid possible username repetition
// ISO Timestamp seems to not be allowed or not working as expected, page always returns that the username is already taken
export function getRandomNumber(min: number = 1, max: number = 1000): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to create a new user with random data using Faker, adding a random number to the username to avoid repetition
export function createUser() : User { 
    const randomNumber = getRandomNumber();
    const user = {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        phoneNumber: faker.phone.number(),
        socialSecurityNumber: faker.number.int({ min: 100000000, max: 999999999 }).toString(),
        //userName: faker.internet.displayName(),
        userName: faker.internet.displayName()+`${randomNumber}`,
        password: faker.internet.password(),
        confirmPassword: faker.internet.password()
    }
    return user;
}