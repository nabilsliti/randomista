import { EType } from '../enums';

/**
 * Number interface
 * @interface
 * @property {string} _type_ - Number type (always 'number')
 * @property {number} _min_ - The minimum number value
 * @property {number} _max_ - The maximum number value
 */
export interface INumberSchema {
    _type_: EType.NUMBER;
    _min_?: number;
    _max_?: number;
}