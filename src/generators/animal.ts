import { ANIMALS } from '../constants';
import { getRandomValue } from './value';
import { IValues } from '../interfaces';

/**
 * Generate a random animal
 * @param {IValues} animalSchema
 * @param {Array<string>} animalSchema._values_ - Predefined list of animals to be used to generate a random animal
 * @returns {string} random animal
 */
export const getRandomAnimal = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(ANIMALS);
};