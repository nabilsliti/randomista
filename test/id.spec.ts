import { getRandomId } from '../src/generators';

describe('getRandomId', () => {
    it('returns a string', () => {
        const id = getRandomId();
        expect(typeof id).toBe('string');
    });

    it('returns a different id each time', () => {
        const id1 = getRandomId();
        const id2 = getRandomId();
        expect(id1).not.toBe(id2);
    });
});