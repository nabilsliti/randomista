import { getRandomNumber } from '../src/generators';
import { MAXIMUM_NUMBER, MINIMUM_NUMBER } from '../src/constants';

describe('getRandomNumber', () => {
    it('should generate random number between the specified range', () => {
        const number = getRandomNumber({ _min_: 1, _max_: 10 });
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(10);
    });

    it('should throw an error if _max_ is less than _min_', () => {
        expect(() => {
            getRandomNumber({ _min_: 10, _max_: 1 });
        }).toThrowError('Minimum number (10) cannot exceed maximum number (1).');
    });

    it('should generate random integer if _isInteger_ is true', () => {
        const number = getRandomNumber({ _min_: 1, _max_: 10, _isInteger_: true });
        expect(number).toBeGreaterThanOrEqual(1);
        expect(number).toBeLessThanOrEqual(10);
        expect(Number.isInteger(number)).toBe(true);
    });

    it('should generate random value from _values_ if provided', () => {
        const values = [ 1, 2, 3, 4, 5 ];
        const number = getRandomNumber({ _values_: values });
        expect(values.includes(number)).toBe(true);
    });

    it('should generate random when no schema provided', () => {
        const number = getRandomNumber();
        expect(Number.isInteger(number)).toBe(true);
        expect(number).toBeGreaterThanOrEqual(MINIMUM_NUMBER);
        expect(number).toBeLessThanOrEqual(MAXIMUM_NUMBER);
    });
});