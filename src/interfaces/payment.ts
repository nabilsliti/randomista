import { IValues } from './schema';

export type vendor = 'americanExpress' | 'discoverCard' | 'masterCard' | 'visa' ;

/**
 * Credit card schema interface
 * @interface
 * @property {ICreditCard} _values_ - Predefined list of credit card to be used to generate a random credit card
 * @property {Array<vendor>} _vendors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {Array<string>} _numbers_ - Predefined list of credit card numbers to be used to generate a random credit card number
 * @property {Array<string>} _expirationDates_ - Predefined list of credit card expiration dates to be used to generate a random
 * credit card expiration date
 * @property { Array<string>} _ccvs_ - Predefined list of credit card ccvs to be used to generate a random credit card ccv
 * @property { Array<string>} _holderNames_ - Predefined list of credit card holder names to be used to generate a random credit card holder name
 */
export interface ICreditCardSchema {
    _values_?: Array<ICreditCard>;
    _vendors_?: Array<vendor>;
    _numbers_?: Array<string>,
    _expirationDates_?: Array<string>,
    _ccvs_?: Array<string>,
    _holderNames_?: Array<string>
}

/**
 * Card number schema interface
 * @interface
 * @property { Array<string>} _values_ - Predefined list of card numbers to be used to generate a random card number
 * @property { Array<string>} _vendors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 */
export interface ICardNumberSchema extends IValues {
    _vendors_?: Array<string>,
}

/**
 * Amount schema interface
 * @interface
 * @property { Array<string>} _values_ - Predefined list of amounts to be used to generate a random amount
 * @property {Array<string>} _currencies_ - Predefined list of currencies to be used to generate a random amount
 * @property {boolean} _withSymbol_ - Display or not the currency symbol in the amount
 */
export interface IAmountSchema extends IValues {
    _currencies_?: Array<string>,
    _withSymbol_?: boolean
}

/**
 * Credit card interface
 * @interface
 * @property {string} vendor - Payment vendor ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {string} number - Credit card number
 * @property {number} expirationDate - Credit card expiration date
 * @property {string} ccv - Credit card ccv
 * @property {string} holderName - Credit card holder name
 */
export interface ICreditCard {
    vendor?: vendor;
    number?: string,
    expirationDate?: string,
    ccv?: string,
    holderName?: string
}