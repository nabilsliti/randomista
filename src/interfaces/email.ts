import { IValues } from './schema';

/**
 * Email schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of emails to be used to generate a random email
 * @property {Array<string>} _usernames_ - Predefined list of usernames to be used to generate a random email
 * @property {Array<string>} _domains_ - Predefined list of domains to be used to generate a random email
 */
export interface IEmailSchema extends IValues {
    _usernames_?: Array<string>;
    _domains_?: Array<string>;
}