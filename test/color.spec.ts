import { colorFormat } from '../src/interfaces';
import { COLORS } from '../src/constants';
import { getRandomColor } from '../src/generators';

describe('getRandomColor', () => {
    it('should return a random color in the default format (name)', () => {
        const result = getRandomColor();
        // assert that the result is a string
        expect(typeof result).toBe('string');
        // assert that the result is in the COLORS array
        expect(COLORS).toContain(result);
    });

    it('should return a random color in the specified format (hex)', () => {
        const result = getRandomColor({ _format_: 'hex' });
        // assert that the result is a string
        expect(typeof result).toBe('string');
        // assert that the result is a valid hex color
        expect(result).toMatch(/^#[0-9a-fA-F]{6}$/);
    });

    it('should return a random color in the specified format (rgb)', () => {
        const result = getRandomColor({ _format_: 'rgb' });
        // assert that the result is a string
        expect(typeof result).toBe('string');
        // assert that the result is a valid rgb color
        expect(result).toMatch(/^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/);
    });

    it('should return a random color in the specified format (any)', () => {
        const result = getRandomColor({ _format_: 'any' });
        // assert that the result is a string
        expect(typeof result).toBe('string');
        // assert that the result is a valid rgb, her or name color
        const anyRegex = /rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)|#[0-9a-fA-F]{6}|^[A-Za-z]+$/;
        expect(result).toMatch(anyRegex);
    });

    it('should return a random color from the provided list', () => {
        const colorSchema = {
            _values_: [ 'red', 'green', 'blue' ]
        };
        const result = getRandomColor(colorSchema);
        // assert that the result is a string
        expect(typeof result).toBe('string');
        // assert that the result is one of the provided colors
        expect(colorSchema._values_).toContain(result);
    });

    it('should throw an error if an invalid color format is provided', () => {
        const invalidFormat = 'invalid' as colorFormat;
        expect(() => {
            getRandomColor({ _format_: invalidFormat });
        }).toThrow(`Invalid color code format ${ invalidFormat }`);
    });
});