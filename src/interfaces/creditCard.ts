
import { EType } from '../enums';

export type vendor = 'americanExpress' | 'discoverCard' | 'masterCard' | 'visa' ;

/**
 * Credit card interface
 * @interface
 * @property {string} _type_ - Credit card type (always 'creditCard')
 * @property {string} _vondors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {number} _values_ - Predefined list of credit card details to be used to generate a credit card
 */
export interface ICreditCardSchema {
    _type_: EType.CREDIT_CARD;
    _vendors_?: Array<vendor>;
    _numbers_?: Array<string>,
    _expirationDates_?: Array<string>,
    _ccv_?: Array<string>,
    _holderNames_?: Array<string>
}

/**
 * Card number interface
 * @interface
 * @property {string} _type_ - Card number type (always 'cardNumber')
 * @property {string} _vondors_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @property {number} _numbers_ - Predefined list of card numbers to be used to generate a card number
 */
export interface ICardNumber {
    _type_: EType.CARD_NUMBER;
    _vendors_?: Array<vendor>;
    _numbers_?: Array<string>,
}