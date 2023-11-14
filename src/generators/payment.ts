import { CURRENCIES } from '../constants';
import { getRandomDate } from './date';
import { getRandomNumber } from './number';
import { getRandomRegex } from './regex';
import { getRandomUser } from './user';
import { getRandomValue } from './value';
import { ICardNumberSchema, ICreditCard, ICreditCardSchema, ICurrencySchema, vendor } from '../interfaces';

const regexVendors = {
    masterCard: '^5[1-5][0-9]{14}$',
    visa: '^4[0-9]{12}(?:[0-9]{3})?$',
    americanExpress: '^3[47][0-9]{13}$',
    discoverCard: '^6(?:011|5[0-9]{2})[0-9]{12}$'
};

/**
 * Generate a random card number
 * @param {Partial<ICardNumberSchema>} options
 * @param {Array<string>} options._numbers_ - Predefined list of card numbers to be used to generate a random card number
 * @param {Array<string>} options._vendors_ - Predefined list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * to be used to generate a random card number
 * @returns {string} random card number
 */
export const getRandomCardNumber = ({ _values_, _vendors_ }: Partial<ICardNumberSchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVendors);
    const regex = vendors.map(vendor => regexVendors[ vendor ]).join('|') as unknown as RegExp;
    return getRandomRegex({ _regex_: regex });
};

/**
 * Generate a random credit card details
 * @param {Partial<ICreditCardSchema>} creditCardSchema
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
export const getRandomCreditCard = (creditCardSchema: Partial<ICreditCardSchema> = {}): ICreditCard => {
    if (Boolean(creditCardSchema._values_?.length)) {
        return getRandomValue(creditCardSchema._values_);
    }
    const { _numbers_, _expirationDates_, _ccvs_, _holderNames_, _vendors_ } = creditCardSchema;
    const vendor = Boolean(_vendors_?.length) ? getRandomValue(_vendors_) : getRandomValue(Object.keys(regexVendors)) as vendor;
    const number = getRandomCardNumber({ _values_: _numbers_, _vendors_: [ vendor ] });
    const expirationDate = Boolean(_expirationDates_?.length) ? getRandomValue(_expirationDates_) : getRandomDate({ _format_: 'MM/yy' });
    const ccv = Boolean(_ccvs_?.length) ? getRandomValue(_ccvs_) : `${ getRandomNumber({ _min_: 100, _max_: 999 }) }`;
    const holderName = Boolean(_holderNames_?.length) ? getRandomValue(_holderNames_) : getRandomUser().fullName;

    return { vendor, number, expirationDate, ccv, holderName };
};

/**
 * Generate a random currency
 * @param {Partial<ICurrencySchema>} currencySchema
 * @param {Array<string>} currencySchema._values_ - Predefined list of currencies to be used to generate a random currency
 * @returns {string} random currency
 */
export const getRandomCurrency = ({ _values_ }: Partial<ICurrencySchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(CURRENCIES);
};