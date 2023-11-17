import { getRandomEmail } from '../src/generators';

describe('getRandomEmail', () => {
    it('should return a random email when no emailSchema is provided', () => {
        const email = getRandomEmail();
        expect(email).toMatch(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
    });

    it('should return a random email from the _values_ array in emailSchema', () => {
        const emailSchema = {
            _values_: [ 'test1@example.com', 'test2@example.com', 'test3@example.com' ],
        };
        const email = getRandomEmail(emailSchema);
        expect(email).toMatch(/test[1-3]@example.com/);
    });

    it('should return a random email with the provided _usernames_', () => {
        const emailSchema = {
            _usernames_: [ 'user1', 'user2', 'user3' ],
        };
        const email = getRandomEmail(emailSchema);
        expect(email).toMatch(/user[1-3]@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/);
    });

    it('should return a random email with the provided _domains_', () => {
        const emailSchema = {
            _domains_: [ 'example.com', 'test.com', 'demo.com' ],
        };
        const email = getRandomEmail(emailSchema);
        expect(email).toMatch(/[A-Za-z0-9._%+-]+@(example|test|demo)\.com/);
    });
});