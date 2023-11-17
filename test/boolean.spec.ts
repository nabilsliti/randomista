import { getRandomBoolean } from '../src/generators';

describe('getRandomBoolean', () => {
    it('should return a boolean value', () => {
        const result = getRandomBoolean();
        expect(typeof result).toBe('boolean');
    });

    it('should return either true or false', () => {
        const result = getRandomBoolean();
        expect([ true, false ]).toEqual(expect.arrayContaining([ result ]));
    });
});