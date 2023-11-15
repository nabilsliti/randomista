import { getRandomValue } from './value';
import { ISentenceSchema, IWordSchema } from '../interfaces';
import { loremIpsum } from 'lorem-ipsum';
import { MAXIMUM_WORD, MINIMUM_WORD } from '../constants';

/**
 * Generate a random word
 * @param {IWordSchema} wordSchema
 * @param {Array<string>} wordSchema._values_ - Predefined list of words to be used to generate a word
 * @param {string} wordSchema._prefix_ The prefix of the word to generate
 * @param {string} wordSchema._suffix_ The suffix of the word to generate
 * @returns {string} random word
 */
export const getRandomWord = ({ _values_, _prefix_ = '', _suffix_ = '' }: IWordSchema = {}): string => {
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

/**
 * Generate a random sentence
 * @param {ISentenceSchema} sentenceSchema
 * @param {Array<string>} sentenceSchema._values_ - Predefined list of sentences to be used to generate a random sentence
 * @param {number} sentenceSchema._min_ - The minimum number of words in the sentence (default MINIMUM_WORD = 10)
 * @param {number} sentenceSchema._max_ - The minimum number of words in the sentence (default MAXIMUM_WORD = 30)
 * @returns {string} random sentence
 */
export const getRandomSentence = ({ _values_, _min_ = MINIMUM_WORD, _max_ = MAXIMUM_WORD }: ISentenceSchema = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return loremIpsum({
        count: 1,
        format: 'plain',
        sentenceLowerBound: _min_,
        sentenceUpperBound: _max_,
        units: 'sentences',
    });
};