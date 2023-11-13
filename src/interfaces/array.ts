import { EType } from '../enums';

/**
 * Array interface
 * @interface
 * @property {string} _type_ - Array type (always 'array')
 * @property {string} _fieldType_ - The type of the array elements
 * @property {number | Date} _min_ - The minimum value of number/date elements in the array
 * @property {number | Date} _max_ - The maximum value of number/date elements in the array
 * @property {number} _length_ - The number of elements in the array
 * @property {string} _format_ - The format of date elements in the array
 * @property {string} _suffix_ - The suffix of the string elements in the array
 */
export interface IArraySchema {
    _type_: EType.ARRAY;
    _fieldType_: string;
    _min_?: number | Date;
    _max_?: number | Date;
    _length_?: number;
    _format_?: string;
    _suffix_?: string;
}