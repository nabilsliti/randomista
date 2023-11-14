import { EType } from '../enums';

/**
 * Email schema interface
 * @interface
 * @property {string} _type_ - Email type (always 'email')
 * @property {Array<string>} _values_ - Predefined list of emails to be used to generate a random email
 * @property {Array<string>} _usernames_ - Predefined list of usernames to be used to generate a random email
 * @property {Array<string>} _domains_ - Predefined list of domains to be used to generate a random email
 */
export interface IEmailSchema {
    _type_: EType.EMAIL;
    _values_?: Array<string>;
    _usernames_?: Array<string>;
    _domains_?: Array<string>;
}