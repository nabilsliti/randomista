import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - String type (always 'string')
 * @property {number} _values_ - Predefined list of sentences to be used to generate a sentence
 * @property {number} _min_ - The minimum number of words in the sentence
 * @property {number} _max_ - The maximum number of words in the sentence
 */
export interface ISentenceSchema {
    _type_: EType.SENTENCE;
    _values_: Array<string>;
    _min_?: number;
    _max_?: number;
}