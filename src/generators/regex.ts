import { IRegexSchema } from '../interfaces';
import RandExp from 'randexp';

/**
 * Generate a random value matching the regex pattern
 * @param {IRegexSchema} regexSchema
 * @param {RegExp} regexSchema._regex_ - The regex pattern used to generate the value
 * @returns {string} random value matching the regex pattern
 */
export const getRandomRegex = ({ _regex_ }: IRegexSchema): string => new RandExp(_regex_).gen();
