import { EType } from '../enums';

/**
 * Sentence schema interface
 * @interface
 * @property {string} _type_ - Sentence type (always 'sentence')
 * @property {Array<string>} _values_ - Predefined list of sentences to be used to generate a random sentence
 * @property {number} _min_ - The minimum number of words in the sentence
 * @property {number} _max_ - The maximum number of words in the sentence
 */
export interface ISentenceSchema {
    _type_: EType.SENTENCE;
    _values_: Array<string>;
    _min_?: number;
    _max_?: number;
}

/**
 * Word schema interface
 * @interface
 * @property {string} _type_ - Word type (always 'word')
 * @property {Array<string>} _values_ - Predefined list of words to be used to generate a random word
 * @property {string} _prefix_ - The prefix of the word
 * @property {string} _suffix_ - The suffix of the word
 */
export interface IWordSchema {
    _type_: EType.WORD;
    _values_?: Array<string>;
    _prefix_?: string;
    _suffix_?: string;
}