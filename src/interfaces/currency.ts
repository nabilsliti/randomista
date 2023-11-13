
import { EType } from '../enums';

/**
 * Currency interface
 * @interface
 * @property {string} _type_ - Currency type (always 'currency')
 * @property {number} _values_ - Predefined list of currencies to be used to generate a currency
 */
export interface ICurrencySchema {
    _type_: EType.CURRENCY;
    _values_?: Array<string>;
}