import { IAddress } from './address';

/**
 * User schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of users to be used to generate a user
 * @property {Array<string>} _usernames_ - Predefined list of user names to be used to generate a random user name
 * @property {Array<string>} _fullNames_ - Predefined list of full names to be used to generate a random full name
 * @property {Array<string>} _firstNames_ - Predefined list of first names to be used to generate a random first name
 * @property {Array<string>} _lastNames_ - Predefined list of last names to be used to generate a random last name
 * @property {Array<string>} _emails_ - Predefined list of email to be used to generate an email
 * @property {Array<number>} _ages_ - Predefined list of ages to be used to generate an age
 * @property {Array<number>} _phones_ - Predefined list of phone numbers to be used to generate a random phone number
 * @property {Array<number>} _addresses_ - Predefined list of address to be used to generate a random address
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