import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - String type (always 'email')
 * @property {Array<string>} _values_ - Predefined list of emails to be used to generate an email
 * @property {Array<string>} _usernames_ - Predefined list of usernames to be used to generate an email
 * @property {Array<string>} _domains_ - Predefined list of domains to be used to generate an email
 */
export interface IEmailSchema {
    _type_: EType.EMAIL;
    _values_?: Array<string>;
    _usernames_?: Array<string>;
    _domains_?: Array<string>;
}