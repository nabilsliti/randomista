import { EType } from '../enums';

export type zipCodeFormat = '5d' | '9d' | 'any';

/**
 * Address schema interface
 * @interface
 * @property {string} _type_ - Address type (always 'address')
 * @property {Array<string>} _values_ - Predefined list of address to be used to generate a random address
 * @property {Array<string>} _zips_ - Predefined list of zips to be used to generate a random zip code
 * @property {Array<string>} _streets_ - Predefined list of streets to be used to generate a random street
 * @property {Array<string>} _cities_ - Predefined list of cities to be used to generate a random city
 * @property {Array<string>} _countries_ - Predefined list of countries to be used to generate an country
 */
export interface IAddressSchema {
    _type_: EType.ADDRESS;
    _values_?: Array<IAddress>;
    _zips_?: Array<string>;
    _streets_?: Array<string>;
    _cities_?: Array<string>;
    _countries_?: Array<string>;
}

/**
 * Zip code schema interface
 * @interface
 * @property {string} _type_ - Zip code type (always 'zipCode')
 * @property {Array<string>} _values_ - Predefined list of zip code to be used to return a random zip code
 * @property {string} _format_ - The format of the zip code ('5d' | '9d' | 'any')
 */
export interface IZipCodeSchema {
    _type_: EType.ZIP_CODE;
    _values_?: Array<string>;
    _format_?: zipCodeFormat;
}

/**
 * Street schema interface
 * @interface
 * @property {string} _type_ - Street type (always 'street')
 * @property {number} _values_ - Predefined list of streets to be used to generate a random street
 */
export interface IStreetSchema {
    _type_: EType.STREET;
    _values_: Array<string>;
}

/**
 * City schema interface
 * @interface
 * @property {string} _type_ - City type (always 'city')
 * @property {number} _values_ - Predefined list of cities to be used to generate a random city
 */
export interface ICitySchema {
    _type_: EType.CITY;
    _values_?: Array<string>;
}

/**
 * Country schema interface
 * @interface
 * @property {string} _type_ - Country type (always 'country')
 * @property {number} _values_ - Predefined list of countries to be used to generate a random country
 */
export interface ICountrySchema {
    _type_: EType.COUNTRY;
    _values_: Array<string>;
}

/**
 * Country code schema interface
 * @interface
 * @property {string} _type_ - Country code type (always 'countryCode')
 * @property {number} _values_ - Predefined list of country codes to be used to generate a random country code
 */
export interface ICountryCodeSchema {
    _type_: EType.COUNTRY_CODE;
    _values_?: Array<string>;
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