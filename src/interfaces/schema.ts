import { IArraySchema } from './array';
import { ICollection } from './collection';
import { IDateSchema, IDateTimeSchema, ITimeSchema } from './date';
import { INumberSchema } from './number';
import { IRegexSchema } from './regex';
import { ISentenceSchema, IWordSchema } from './string';
import { IUrlSchema } from './url';

export type IOptions = string |
ICollection |
ISentenceSchema |
IWordSchema |
INumberSchema |
IRegexSchema |
IDateTimeSchema |
IDateSchema |
ITimeSchema |
IArraySchema |
IUrlSchema;

export type ISchema = Record<string, IOptions>;

/**
 * Values schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of elements to be used to generate a random element
 */
export interface IValues {
    _values_?: Array<string>;
}