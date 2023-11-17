import { getRandomValue } from '../src/generators';

describe('getRandomValue', () => {
    it('should return a random value from the given values', () => {
        const values = [ 'apple', 'banana', 'orange' ];
        const result = getRandomValue(values);

        expect(values).toContain(result);
    });

    it('should return the only value if the array has only one value', () => {
        const value = 'apple';
        const result = getRandomValue([ value ]);

        expect(result).toEqual(value);
    });

    it('should return undefined if the array is empty', () => {
        const result = getRandomValue([]);

        expect(result).toBeUndefined();
    });
});