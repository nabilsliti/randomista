import { EType } from '../enums';

/**
 * String interface
 * @interface
 * @property {string} _type_ - String type (always 'url')
 * @property {Array<string>} _values_ - Predefined list of urls to be used to generate an URL
 * @property {Array<string>} _protocols_ - Predefined list of protocols to be used to generate an URL
 * @property {Array<string>} _domains_ - Predefined list of domains to be used to generate an URL
 * @property {Array<string>} _ports_ - Predefined list of ports to be used to generate an URL
 * @property {Array<string>} _paths_ - Predefined list of paths to be used to generate an URL
 */
export interface IUrlSchema {
    _type_: EType.URL;
    _values_?: Array<string>;
    _protocols_?: Array<string>;
    _domains_?: Array<string>;
    _ports_?: Array<string>;
    _paths_?: Array<string>;
}