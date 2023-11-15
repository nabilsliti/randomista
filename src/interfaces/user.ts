import { IAddress } from './address';

/**
 * User schema interface
 * @interface
 * @property {Array<string>} _names_ - Predefined list of first names to be used to generate a name
 * @property {Array<string>} _emails_ - Predefined list of email to be used to generate an email
 * @property {Array<number>} _ages_ - Predefined list of ages to be used to generate an age
 */
export interface IUserSchema {
    _values_?: Array<IUser>;
    _usernames_?: Array<string>;
    _fullNames_?: Array<string>;
    _firstNames_?: Array<string>;
    _lastNames_?: Array<string>;
    _emails_?: Array<string>;
    _ages_?: Array<number>;
    _phones_?: Array<string>;
    _addresses_?: Array<IAddress>;
}

/**
 * User interface
 * @interface
 * @property {string} username - Username
 * @property {string} fullName -  Full name
 * @property {string} firstName -  First name
 * @property {string} lastName -  Last name
 * @property {string} email - User email
 * @property {number} age - User age
 * @property {string} phone - Phone number
 * @property {IAddress} address - User address
 */
export interface IUser {
    username?: string;
    fullName?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    age?: number;
    phone?: string;
    address?: IAddress;
}