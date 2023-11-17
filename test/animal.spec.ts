import { ANIMALS } from '../src/constants';
import { getRandomAnimal } from '../src/generators';

describe('getRandomAnimal', () => {
    it('should return a random animal from the predefined list', () => {
        const animal = getRandomAnimal({ _values_: [ 'cat', 'dog', 'elephant' ] });
        expect([ 'cat', 'dog', 'elephant' ]).toContain(animal);
    });

    it('should return a random animal from the default list if no predefined list is provided', () => {
        const animal = getRandomAnimal();
        expect(ANIMALS).toContain(animal);
    });
});