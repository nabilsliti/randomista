import { IValues } from './schema';

/**
 * Url schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of urls to be used to generate a random URL
 * @property {Array<string>} _protocols_ - Predefined list of protocols to be used to generate a random protocol
 * @property {Array<string>} _domains_ - Predefined list of domains to be used to generate a random domain
 * @property {Array<string>} _ports_ - Predefined list of ports to be used to generate a random port
 * @property {Array<string>} _paths_ - Predefined list of paths to be used to generate a random path
 */
export interface IUrlSchema extends IValues {
    _protocols_?: Array<string>;
    _domains_?: Array<string>;
    _ports_?: Array<string>;
    _paths_?: Array<string>;
}