import { CURRENCIES, REGEX_VENDORS } from '../constants';
import { getRandomDate } from './date';
import { getRandomNumber } from './number';
import { getRandomRegex } from './regex';
import { getRandomUser } from './user';
import { getRandomValue } from './value';
import { IAmountSchema, ICardNumberSchema, ICreditCard, ICreditCardSchema, IValues, vendor } from '../interfaces';

/**
 * Generate a random card number
 * @param {ICardNumberSchema} options
 * @param {Array<string>} options._numbers_ - Predefined list of card numbers to be used to generate a random card number
 * @param {Array<string>} options._vendors_ - Predefined list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * to be used to generate a random card number
 * @returns {string} random card number
 */
export const getRandomCardNumber = ({ _values_, _vendors_ }: ICardNumberSchema = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(REGEX_VENDORS);
    const regex = vendors.map(vendor => REGEX_VENDORS[ vendor ]).join('|') as unknown as RegExp;
    return getRandomRegex({ _regex_: regex });
};

/**
 * Generate a random credit card details
 * @param {ICreditCardSchema} creditCardSchema
 * @property {number} creditCardSchema._values_ - Predefined list of credit card to be used to generate a random credit card
 * @property {string} creditCardSchema._vendors_ - Predefined list of payment vendors
 * ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard') to be used to generate a random payment vendor
 * @property {number} creditCardSchema._numbers_ - Predefined list of credit card numbers to be used to generate a random credit card number
 * @property {number} creditCardSchema._expirationDates_ - Predefined list of credit card expiration dates to be used
 * to generate a random credit card expiration date
 * @property {number} creditCardSchema._ccvs_ - Predefined list of credit card ccvs to be used to generate a random credit card ccv
 * @property {number} creditCardSchema._holderNames_ - Predefined list of credit card holder names to be used
 * to generate a random credit card holder name
 * @returns {string} random credit card details
 */
export const getRandomCreditCard = (creditCardSchema: ICreditCardSchema = {}): ICreditCard => {
    if (Boolean(creditCardSchema._values_?.length)) {
        return getRandomValue(creditCardSchema._values_);
    }
    const { _numbers_, _expirationDates_, _ccvs_, _holderNames_, _vendors_ } = creditCardSchema;
    const vendor = Boolean(_vendors_?.length) ? getRandomValue(_vendors_) : getRandomValue(Object.keys(REGEX_VENDORS)) as vendor;
    const number = getRandomCardNumber({ _values_: _numbers_, _vendors_: [ vendor ] });
    const expirationDate = Boolean(_expirationDates_?.length) ? getRandomValue(_expirationDates_) : getRandomDate({ _format_: 'MM/yy' });
    const ccv = Boolean(_ccvs_?.length) ? getRandomValue(_ccvs_) : `${ getRandomNumber({ _min_: 100, _max_: 999, _isInteger_: true }) }`;
    const holderName = Boolean(_holderNames_?.length) ? getRandomValue(_holderNames_) : getRandomUser().fullName;

    return { vendor, number, expirationDate, ccv, holderName };
};

/**
 * Generate a random currency
 * @param {ICurrencySchema} currencySchema
 * @param {Array<string>} currencySchema._values_ - Predefined list of currencies to be used to generate a random currency
 * @returns {string} random currency
 */
export const getRandomCurrency = ({ _values_ }: IValues = {}): string => {
    const values = Boolean(_values_?.length) ? _values_ : Object.keys(CURRENCIES);
    return getRandomValue(values);
};

/**
 * Generate a random amount
 * @param {IAmountSchema} amountSchema
 * @param {Array<string>} amountSchema._values_ - Predefined list of amounts to be used to generate a random amount
 * @param {Array<string>} amountSchema._currencies_ - Predefined list of currencies to be used to generate a random amount
 * @property {boolean} amountSchema._withSymbol_ - Display or not the currency symbol in the amount (by default = true)
 * @returns {string} random amount
 */
export const getRandomAmount = ({ _values_, _currencies_, _withSymbol_ = true }: IAmountSchema = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    let symbol = '';
    if (Boolean(_currencies_?.length)) {
        const currenciesSymbol = _currencies_.map(currency => CURRENCIES[ currency ]);
        symbol = getRandomValue(currenciesSymbol);
    } else {
        symbol = getRandomValue(Object.values(CURRENCIES));
    }
    const randomCurrencySymbol = _withSymbol_ ? `${ symbol }` : '';

    const randomAmount = getRandomNumber({ _min_: -999999999, _max_: 999999999 }).toFixed(2);
    // Format the amount with commas for thousands and two decimal places
    const formattedAmount = parseFloat(randomAmount).toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    return `${ randomCurrencySymbol }${ formattedAmount }`;

};