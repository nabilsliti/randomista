import { EType } from '../enums';

/**
 * Regex interface
 * @interface
 * @property {string} _type_ - Regex type (always 'regex')
 * @property {RegExp} _regex_ - The pattern of the regular expression
 */
export interface IRegexSchema {
    _type_: EType.REGEX;
    _regex_: RegExp;
}