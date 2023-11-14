
import { EType } from '../enums';

export type vendor = 'americanExpress' | 'discoverCard' | 'masterCard' | 'visa' ;

/**
 * Credit card schema interface
 * @interface
 * @property {string} _type_ - Credit card type (always 'creditCard')
 * @property {number} _values_ - Predefined list of credit card to be used to generate a credit card
 * @property {string} _vendors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {number} _numbers_ - Predefined list of credit card numbers to be used to generate a credit card number
 * @property {number} _expirationDates_ - Predefined list of credit card expiration dates to be used to generate a credit card expiration date
 * @property {number} _ccvs_ - Predefined list of credit card ccvs to be used to generate a credit card ccv
 * @property {number} _holderNames_ - Predefined list of credit card holder names to be used to generate a credit card holder name
 */
export interface ICreditCardSchema {
    _type_: EType.CREDIT_CARD;
    _values_: Array<ICreditCard>;
    _vendors_?: Array<vendor>;
    _numbers_?: Array<string>,
    _expirationDates_?: Array<string>,
    _ccvs_?: Array<string>,
    _holderNames_?: Array<string>
}

/**
 * Card number schema interface
 * @interface
 * @property {string} _type_ - Card number type (always 'cardNumber')
 * @property {number} _values_ - Predefined list of card numbers to be used to generate a random card number
 * @property {string} _vendors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 */
export interface ICardNumberSchema {
    _type_: EType.CREDIT_CARD_NUMBER;
    _values_?: Array<string>,
    _vendors_?: Array<string>,
}

/**
 * Currency schema interface
 * @interface
 * @property {string} _type_ - Currency type (always 'currency')
 * @property {number} _values_ - Predefined list of currencies to be used to generate a random currency
 */
export interface ICurrencySchema {
    _type_: EType.CURRENCY;
    _values_?: Array<string>;
}

/**
 * Credit card interface
 * @interface
 * @property {string} vendor - Payment vendor ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {string} number - Credit card number
 * @property {number} expirationDate - Credit card expiration date
 * @property {number} ccv - Credit card ccv
 * @property {number} holderName - Credit card holder name
 */
export interface ICreditCard {
    vendor: vendor;
    number: string,
    expirationDate?: string,
    ccv?: string,
    holderName?: string
}