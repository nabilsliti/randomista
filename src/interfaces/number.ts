import { EType } from '../enums';

/**
 * Number schema interface
 * @interface
 * @property {string} _type_ - Number type (always 'number')
 * @property {Array<number>} _values_ - Predefined list of number to be used to generate a random number
 * @property {number} _min_ - The minimum number value
 * @property {number} _max_ - The maximum number value
 */
export interface INumberSchema {
    _type_: EType.NUMBER;
    _values_?: Array<number>;
    _min_?: number;
    _max_?: number;
}