import { getRandomDate, getRandomDateTime, getRandomTime } from '../src/generators';

describe('getRandomDateTime', () => {
    test('should return a string', () => {
        const result = getRandomDateTime();
        expect(typeof result).toBe('string');
    });

    test('should return a date within the specified range', () => {
        const minDate = new Date('2022-01-01');
        const maxDate = new Date('2022-12-31');
        const result = getRandomDateTime({ _min_: minDate, _max_: maxDate });
        const resultDate = new Date(result);
        expect(resultDate >= minDate && resultDate <= maxDate).toBe(true);
    });

    test('should throw an error if _min_ is greater than _max_', () => {
        expect(() => {
            getRandomDateTime({ _min_: new Date('2022-12-31'), _max_: new Date('2022-01-01') });
        // eslint-disable-next-line max-len
        }).toThrowError('Minimum date (Sat Jan 01 2022 01:00:00 GMT+0100 (Central European Standard Time)) cannot exceed maximum date (Sat Jan 01 2022 01:00:00 GMT+0100 (Central European Standard Time)).');
    });
});

describe('getRandomDate', () => {
    it('should generate a random date value within the specified range', () => {
        const minDate = new Date('2020-01-01');
        const maxDate = new Date('2022-01-01');
        const result = getRandomDate({
            _min_: minDate,
            _max_: maxDate,
            _format_: 'MM-dd-yyyy'
        });
        const date = new Date(result);
        expect(date >= minDate).toBe(true);
        expect(date <= maxDate).toBe(true);
    });

    it('should generate a random date value with the specified format', () => {
        const result = getRandomDate({
            _format_: 'yyyy/MM/dd'
        });
        expect(result).toMatch(/^\d{4}\/\d{2}\/\d{2}$/);
    });
    it('should generate a random date value with a custom minimum date', () => {
        const minDate = new Date('2023-01-01');
        const result = getRandomDate({
            _min_: minDate,
            _format_: 'MM-dd-yyyy'
        });
        const date = new Date(result);
        expect(date >= minDate).toBe(true);
    });

    it('should generate a random date value with a custom maximum date', () => {
        const maxDate = new Date('2024-12-31');
        const result = getRandomDate({
            _max_: maxDate,
            _format_: 'MM-dd-yyyy'
        });
        const date = new Date(result);
        expect(date <= maxDate).toBe(true);
    });

    it('should generate a random date value when no schema provided', () => {
        const result = getRandomDate();
        expect(result).toMatch(/^\d{2}\/\d{2}\/\d{4}$/);
    });
});

describe('getRandomTime', () => {
    it('should generate a random time using default format', () => {
        const result = getRandomTime();
        expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });

    it('should generate a random time using custom format', () => {
        const format = 'HH:mm';
        const result = getRandomTime({ _format_: format });
        expect(result).toMatch(/^\d{2}:\d{2}$/);
    });

    it('should generate a random time using default format when no schema is provided', () => {
        const result = getRandomTime({});
        expect(result).toMatch(/^\d{2}:\d{2}:\d{2}$/);
    });
});