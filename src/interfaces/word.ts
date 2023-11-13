import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - Word type (always 'word')
 * @property {Array<string>} _values_ - Predefined list of words to be used to generate a word
 * @property {string} _prefix_ - The prefix of the word
 * @property {string} _suffix_ - The suffix of the word
 */
export interface IWordSchema {
    _type_: EType.WORD;
    _values_?: Array<string>;
    _prefix_?: string;
    _suffix_?: string;
}