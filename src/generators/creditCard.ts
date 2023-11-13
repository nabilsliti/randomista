import { getRandomDate } from './date';
import { getRandomNumber } from './number';
import { getRandomPerson } from './person';
import { getRandomRegex } from './regex';
import { getRandomValue } from './value';
import { ICardNumber, ICreditCardSchema, vendor } from '../interfaces/creditCard';

const regexVendors = {
    masterCard: '^5[1-5][0-9]{14}$',
    visa: '^4[0-9]{12}(?:[0-9]{3})?$',
    americanExpress: '^3[47][0-9]{13}$',
    discoverCard: '^6(?:011|5[0-9]{2})[0-9]{12}$'
};

/**
 * Generate a random card number
 * @param {Partial<ICardNumber>} options
 * @param {Array<string>} options._numbers_ - Predefined list of card numbers to be used to generate a card number
 * @returns {string} random card number
 */
export const getRandomCardNumber = ({ _numbers_, _vendors_ }: Partial<ICardNumber> = {}) => {
    if (Boolean(_numbers_?.length)) {
        return getRandomValue(_numbers_);
    }
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVendors);
    const regex = vendors.map(vendor => regexVendors[ vendor ]).join('|') as unknown as RegExp;
    return getRandomRegex({ _regex_: regex });
};

/**
 * Generate a random credit card details
 * @param {Partial<ICreditCardSchema>} options
 * @param {RegExp} options._values_ - The list of payment vendors ('visa' | 'masterCard' | 'americanExpress' | 'discoverCard')
 * @returns {string} random credit card details
 */
export const getRandomCreditCard = ({ _numbers_, _expirationDates_, _ccv_, _holderNames_, _vendors_ }: Partial<ICreditCardSchema> = {}) => {
    const vendors = Boolean(_vendors_?.length) ? _vendors_ : Object.keys(regexVendors);
    const vendor = getRandomValue(vendors) as vendor;
    const type = Boolean(_vendors_?.length) ? getRandomValue(_vendors_) : vendor;
    const number = getRandomCardNumber({ _numbers_: _numbers_, _vendors_: [ type ] });
    const expirationDate = Boolean(_expirationDates_?.length) ? getRandomValue(_expirationDates_) : getRandomDate({ _format_: 'MM/yy' });
    const ccv = Boolean(_ccv_?.length) ? getRandomValue(_ccv_) : `${ getRandomNumber({ _min_: 100, _max_: 999 }) }`;
    let holderName;
    if (Boolean(_holderNames_?.length)) {
        holderName = getRandomValue(_holderNames_);
    } else {
        const { firstName, lastName } = getRandomPerson();
        holderName = `${ firstName } ${ lastName }`;
    }
    return {
        type,
        number,
        expirationDate,
        ccv,
        holderName
    };
};