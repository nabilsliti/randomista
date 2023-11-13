
import { EType } from '../enums';

/**
 * City interface
 * @interface
 * @property {string} _type_ - City type (always 'city')
 * @property {number} _values_ - Predefined list of cities to be used to generate a city
 */
export interface ICitySchema {
    _type_: EType.CITY;
    _values_?: Array<string>;
}