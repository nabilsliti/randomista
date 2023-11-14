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