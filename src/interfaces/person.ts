import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - Person type (always 'person')
 * @property {Array<string>} _firstNames_ - Predefined list of first names to be used to generate a first name
 * @property {Array<string>} _lastNames_ - Predefined list of last names to be used to generate a last name
 */
export interface IPersonSchema {
    _type_: EType.PERSON;
    _firstNames_?: Array<string>;
    _lastNames_?: Array<string>;
}