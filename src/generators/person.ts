import { FIRST_NAMES, LAST_NAMES } from '../constants';
import { getRandomValue } from './value';
import { IPersonSchema } from '../interfaces';

/**
 * Generate a random person
 * @param {Partial<IWordSchema>} options
 * @param {Array<string>} options._firstNames_ - Predefined list of first names to be used to generate a first name
 * @param {Array<string>} options._lastNames_ - Predefined list of last names to be used to generate a last name
 * @returns {string} random person
 */
export const getRandomPerson = ({ _firstNames_, _lastNames_ }: Partial<IPersonSchema> = {}) => ({
    firstName: Boolean(_firstNames_?.length) ? getRandomValue(_firstNames_) : getRandomValue(FIRST_NAMES),
    lastName: Boolean(_lastNames_?.length) ? getRandomValue(_lastNames_) : getRandomValue(LAST_NAMES)
});