import { FIRST_NAMES, LAST_NAMES } from '../constants';
import { getRandomAddress } from './address';
import { getRandomBoolean } from './boolean';
import { getRandomEmail } from './email';
import { getRandomNumber } from './number';
import { getRandomRegex } from './regex';
import { getRandomValue } from './value';
import { IUser, IUserSchema, IValues } from '../interfaces';

/**
 * Generate a random user
 * @param {IUserSchema} userSchema
 * @param {Array<string>} userSchema._names_ - Predefined list of names to be used to generate a random name
 * @param {Array<string>} userSchema._emails_ - Predefined list of emails to be used to generate an email
 * @param {Array<string>} userSchema._ages_ - Predefined list of ages to be used to generate an age
 * @returns {string} random user
 */
export const getRandomUser = (userSchema: IUserSchema = {}): IUser => {
    if (Boolean(userSchema._values_?.length)) {
        return getRandomValue(userSchema?._values_);
    }
    const { _usernames_, _fullNames_, _firstNames_, _lastNames_, _emails_, _ages_, _phones_, _addresses_ } = userSchema;
    const firstName = Boolean(_firstNames_?.length) ? getRandomValue(_firstNames_) : getRandomValue(FIRST_NAMES);
    const lastName = Boolean(_lastNames_?.length) ? getRandomValue(_lastNames_) : getRandomValue(LAST_NAMES);
    const fullName = Boolean(_fullNames_?.length) ? getRandomValue(_fullNames_) : `${ firstName } ${ lastName }`;
    const sep = getRandomBoolean() ? '.' : '_';
    const username = Boolean(_usernames_?.length) ? getRandomValue(_usernames_) : `${ firstName }${ sep }${ lastName }`;
    const email = getRandomEmail({ _values_: _emails_, _usernames_: [ username ] });
    const age = getRandomNumber({ _values_: _ages_, _min_: 18, _max_: 100, _isInteger_: true });
    const phone = getRandomPhoneNumber({ _values_: _phones_ });
    const address = Boolean(_addresses_?.length) ? getRandomValue(_addresses_) : getRandomAddress();

    return { username, fullName, firstName, lastName, email, age, phone, address };
};

/**
 * Generate a random phone number
 * @param {IValues} phoneNumberSchema
 * @param {Array<string>} userSchema._values_ - Predefined list of phone numbers to be used to generate a random phone number
 * @returns {string} random phone number
 */
export const getRandomPhoneNumber = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomRegex({ _regex_: /^\+(?:[0-9] ?){6,14}[0-9]$/ });
};