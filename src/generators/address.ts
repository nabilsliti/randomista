import { CONTINENTS, COUNTRIES, DEFAULT_ZIP_CODE_FORMAT, STREETS } from '../constants';
import { EZipCode } from '../enums';
import { getRandomBoolean } from './boolean';
import { getRandomValue } from './value';
import {
    IAddress,
    IAddressSchema,
    IValues,
    IZipCodeSchema
} from '../interfaces';

const getCountry = () => getRandomValue(COUNTRIES);

/**
 * Generate a random address
 * @param {IAddressSchema} addressSchema
 * @param {Array<IAddress>} addressSchema._values__ - Predefined list of address to be used to generate a random address
 * @param {Array<string>} addressSchema._zips__ - Predefined list of zip codes to be used to generate a random zip code
 * @param {Array<string>} addressSchema._streets_ - Predefined list of streets to be used to generate a random street
 * @param {Array<string>} addressSchema._cities_ - Predefined list of cities to be used to generate a random city
 * @param {Array<string>} addressSchema._countries_ - Predefined list of countries to be used to generate a random country
 * @returns {IAddress} random address
 */
export const getRandomAddress = (addressSchema: IAddressSchema = {}): IAddress => {
    if (Boolean(addressSchema._values_?.length)) {
        return getRandomValue(addressSchema?._values_);
    }
    const { _zips_, _streets_, _cities_, _countries_ } = addressSchema;
    const zip = getRandomZipCode({ _values_: _zips_ });
    const street = getRandomStreet({ _values_: _streets_ });
    const randomCountry = getCountry();
    const city = Boolean(_cities_?.length) ? getRandomCity({ _values_: _cities_ }) : randomCountry.capital;
    const country = Boolean(_countries_?.length) ? getRandomCountry({ _values_: _countries_ }) : randomCountry.name;

    return { zip, street, city, country };
};

/**
 * Generate a random zip code
 * @param {IZipCodeSchema} zipCodeSchema
 * @param {Array<string>} zipCodeSchema._values_ - Predefined list of zip code to be used to return a random a zip code
 * @param {string} zipCodeSchema._format_ - The format of the zip code (default value DEFAULT_ZIP_CODE_FORMAT = 'any')
 * @throws {Error} error if the zip code is not valid (other than '5d', '9d' or 'any')
 * @returns {string} random zip code
 */
export const getRandomZipCode = ({ _values_, _format_ = DEFAULT_ZIP_CODE_FORMAT }: IZipCodeSchema = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }

    if (!Object.keys(EZipCode).includes(_format_ as string)) {
        throw new Error(`Invalid zip code format ${ _format_ }`);
    }

    const randomZipCode = () => (Math.floor(Math.random() * 10)).toString();
    const format = _format_ !== 'any' ? EZipCode[ _format_ ] : (getRandomBoolean() ? EZipCode[ '5d' ] : EZipCode[ '9d' ]);
    return format.replace(/#/g, randomZipCode);
};

/**
 * Generate a random country code
 * @param {IValues} countryCodeSchema
 * @param {Array<string>} countryCodeSchema._values_ - Predefined list of country codes to be used to generate a random country code
 * @returns {string} random country code
 */
export const getRandomCountryCode = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getCountry().code;
};

/**
 * Generate a random country
 * @param {IValues} countrySchema
 * @param {Array<string>} countrySchema._values_ - Predefined list of countries to be used to generate a random country
 * @returns {string} random country
 */
export const getRandomCountry = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getCountry().name;
};

/**
 * Generate a random city
 * @param {IValues} citySchema
 * @param {Array<string>} citySchema._values_ - Predefined list of cities to be used to generate a random city
 * @returns {string} random city
 */
export const getRandomCity = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getCountry().capital;
};

/**
 * Generate a random street
 * @param {IValues} streetSchema
 * @param {Array<string>} streetSchema._values_ - Predefined list of streets to be used to generate a random street
 * @returns {string} random street
 */
export const getRandomStreet = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(STREETS);
};

/**
 * Generate a random continent
 * @param {IValues} continentSchema
 * @param {Array<string>} continentSchema._values_ - Predefined list of continents to be used to generate a random continent
 * @returns {string} random continent
 */
export const getRandomContinent = ({ _values_ }: IValues = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(CONTINENTS);
};