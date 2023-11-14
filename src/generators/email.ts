import { EMAIL_DOMAINS, FIRST_NAMES, LAST_NAMES } from '../constants';
import { getRandomBoolean } from './boolean';
import { getRandomNumber } from './number';
import { getRandomValue } from './value';
import { IEmailSchema } from '../interfaces';

/**
 * Generate a random email
 * @param {Partial<IEmailSchema>} emailSchema
 * @param {Array<string>} emailSchema._values_ - Predefined list of emails to be used to generate a random email
 * @param {Array<string>} emailSchema._usernames_ - Predefined list of usernames to be used to generate a random email
 * @param {Array<string>} emailSchema._domains_ - Predefined list of domains to be used to generate a random email
 * @returns {string} random email
 */
export const getRandomEmail = ({ _values_, _usernames_, _domains_ }: Partial<IEmailSchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }

    let username;
    if (Boolean(_usernames_?.length)) {
        username = getRandomValue(_usernames_);
    } else {
        const firstName = getRandomValue(FIRST_NAMES);
        const lastName = getRandomValue(LAST_NAMES);
        const sep = getRandomBoolean() ? '.' : '_';
        username = `${ firstName }${ sep }${ lastName }${ getRandomBoolean() ? '' : getRandomNumber({ _min_: 100, _max_: 99999 }) }`;
    }
    const domain = Boolean(_domains_?.length) ? getRandomValue(_domains_) : getRandomValue(EMAIL_DOMAINS);
    return `${ username }@${ domain }`;
};