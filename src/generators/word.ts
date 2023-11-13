import { getRandomValue } from './value';
import { IWordSchema } from '../interfaces';
import { loremIpsum } from 'lorem-ipsum';

/**
 * Generate a random word
 * @param {Partial<IWordSchema>} options
 * @param {Array<string>} options._values_ - Predefined list of words to be used to generate a word
 * @param {string} options._prefix_ The prefix of the word to generate
 * @param {string} options._suffix_ The suffix of the word to generate
 * @returns {string} random word
 */
export const getRandomWord = ({ _values_, _prefix_ = '', _suffix_ = '' }: Partial<IWordSchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const word = loremIpsum({
        count: 1,
        format: 'plain',
        units: 'words'
    });
    return `${ _prefix_ }${ word }${ _suffix_ }`;
};
