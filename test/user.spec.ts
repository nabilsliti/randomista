import { getRandomPhoneNumber, getRandomUser } from '../src/generators';
import { IUserSchema } from '../src/interfaces';

describe('getRandomUser', () => {
    it('should generate a random user without any userSchema', () => {
        const user = getRandomUser();
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._values_', () => {
        const users = [ {
            username: 'user.one',
            fullName: 'User One',
            firstName: 'User',
            lastName: 'One',
            email: 'user.one@gamil.com',
            age: 30
        }, {
            username: 'user.two',
            fullName: 'User Two',
            firstName: 'User',
            lastName: 'Two',
            email: 'user.two@gamil.com',
            age: 40
        }, {
            username: 'user.three',
            fullName: 'User Three',
            firstName: 'User',
            lastName: 'Three',
            email: 'user.three@gamil.com',
            age: 50
        } ];
        const userSchema: IUserSchema = { _values_: users };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(users).toContain(user);
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeUndefined();
        expect(user.address).toBeUndefined();
    });

    it('should generate a random user with userSchema._firstNames_', () => {
        const userSchema = { _firstNames_: [ 'John', 'Jane' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._lastNames_', () => {
        const userSchema = { _lastNames_: [ 'Doe', 'Smith' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._emails_', () => {
        const userSchema = { _emails_: [ 'test1@example.com', 'test2@example.com' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._ages_', () => {
        const userSchema = { _ages_: [ 20, 30, 40 ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._phones_', () => {
        const userSchema = { _phones_: [ '1234567890', '9876543210' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });
    it('should generate a random user with userSchema._addresses_', () => {
        const addresses = [ {
            zip: '123',
            street: 'street',
            city: 'City',
            country: 'Country',
        }, {
            zip: '456',
            street: 'Avenue',
            city: 'Town',
            country: 'Country',
        } ];
        const userSchema = { _addresses_: addresses };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
        expect(addresses).toContain(user.address);
    });

    it('should generate a random user with userSchema._usernames_', () => {
        const userSchema = { _usernames_: [ 'john_doe', 'jane_smith' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });

    it('should generate a random user with userSchema._fullNames_', () => {
        const userSchema = { _fullNames_: [ 'john doe', 'jane smith' ] };
        const user = getRandomUser(userSchema);
        expect(user).toBeDefined();
        expect(user.username).toBeDefined();
        expect(user.fullName).toBeDefined();
        expect(user.firstName).toBeDefined();
        expect(user.lastName).toBeDefined();
        expect(user.email).toBeDefined();
        expect(user.age).toBeDefined();
        expect(user.phone).toBeDefined();
        expect(user.address).toBeDefined();
    });
});

describe('getRandomPhoneNumber', () => {
    it('should return a random phone number if _values_ is provided', () => {
        const phoneNumberSchema = {
            _values_: [ '1234567890', '0987654321', '5555555555' ]
        };
        const result = getRandomPhoneNumber(phoneNumberSchema);
        expect(phoneNumberSchema._values_).toContain(result);
    });

    it('should return a random phone number if _values_ is not provided', () => {
        const result = getRandomPhoneNumber();
        expect(result).toMatch(/^\+(?:[0-9] ?){6,14}[0-9]$/);
    });
});