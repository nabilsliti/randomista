import { countries } from 'countries-list';
import { getRandomValue } from './value';
import { ICitySchema, ICountryCodeSchema, ICountrySchema, ICurrencySchema } from '../interfaces';

const getCountryCodes = (): Array<string> => Object.keys(countries);

const getCountry = () => {
    const randomIsoCountryCode = getRandomValue(getCountryCodes());
    return countries[ randomIsoCountryCode ];
};

/**
 * Generate a random country code
 * @param {Partial<ICountryCodeSchema>} options
 * @param {Array<string>} options._values_ - Predefined list of country codes to be used to generate a country code
 * @returns {string} random country code
 */
export const getRandomCountryCode = ({ _values_ }: Partial<ICountryCodeSchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getRandomValue(getCountryCodes());
};

/**
 * Generate a random country
 * @param {Partial<ICountrySchema>} options
 * @param {Array<string>} options._values_ - Predefined list of countries to be used to generate a country
 * @returns {string} random country
 */
export const getRandomCountry = ({ _values_ }: Partial<ICountrySchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    return getCountry().name;
};

/**
 * Generate a random city
 * @param {Partial<ICitySchema>} options
 * @param {Array<string>} options._values_ - Predefined list of cities to be used to generate a city
 * @returns {string} random city
 */
export const getRandomCity = ({ _values_ }: Partial<ICitySchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const randomCity = getCountry().capital;
    return Boolean(randomCity) ? randomCity : getRandomCity();
};

/**
 * Generate a random currency
 * @param {Partial<ICitySchema>} options
 * @param {Array<string>} options._values_ - Predefined list of currencies to be used to generate a currency
 * @returns {string} random currency
 */
export const getRandomCurrency = ({ _values_ }: Partial<ICurrencySchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    const randomCurrency = getCountry().currency;
    return Boolean(randomCurrency.length) ? randomCurrency[ 0 ] : getRandomCurrency();
};
