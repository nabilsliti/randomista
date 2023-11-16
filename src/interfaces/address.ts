import { IValues } from './schema';

export type zipCodeFormat = '5d' | '9d' | 'any';

/**
 * Address schema interface
 * @interface
 * @property {Array<IAddress>} _values_ - Predefined list of address to be used to generate a random address
 * @property {Array<string>} _zips_ - Predefined list of zips to be used to generate a random zip code
 * @property {Array<string>} _streets_ - Predefined list of streets to be used to generate a random street
 * @property {Array<string>} _cities_ - Predefined list of cities to be used to generate a random city
 * @property {Array<string>} _countries_ - Predefined list of countries to be used to generate an country
 */
export interface IAddressSchema {
    _values_?: Array<IAddress>;
    _zips_?: Array<string>;
    _streets_?: Array<string>;
    _cities_?: Array<string>;
    _countries_?: Array<string>;
}

/**
 * Zip code schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of zip code to be used to return a random zip code
 * @property {zipCodeFormat} _format_ - The format of the zip code ('5d' | '9d' | 'any')
 */
export interface IZipCodeSchema extends IValues {
    _format_?: zipCodeFormat;
}

/**
 * Address interface
 * @interface
 * @property {string} zip - Zip code
 * @property {string} street - Street
 * @property {string} city - City
 * @property {string} country - Country
 */
export interface IAddress {
    zip?: string;
    street?: string;
    city?: string;
    country?: string;
}