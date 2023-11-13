import { IArraySchema } from './array';
import { ICollection } from './collection';
import { IDateSchema, IDateTimeSchema, ITimeSchema } from './date';
import { INumberSchema } from './number';
import { IRegexSchema } from './regex';
import { ISentenceSchema } from './sentence';
import { IUrlSchema } from './url';
import { IWordSchema } from './word';

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