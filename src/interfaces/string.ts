import { IValues } from './schema';

/**
 * Sentence schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of sentences to be used to generate a random sentence
 * @property {number} _min_ - The minimum number of words in the sentence
 * @property {number} _max_ - The maximum number of words in the sentence
 */
export interface ISentenceSchema extends IValues {
    _min_?: number;
    _max_?: number;
}

/**
 * Word schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of words to be used to generate a random word
 * @property {string} _prefix_ - The prefix of the word
 * @property {string} _suffix_ - The suffix of the word
 */
export interface IWordSchema extends IValues {
    _prefix_?: string;
    _suffix_?: string;
}