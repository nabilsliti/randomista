import { EType } from '../enums';

export type zipCodeFormat = '5d' | '9d' | '5d-9d';

/**
 * Zip code interface
 * @interface
 * @property {string} _type_ - Zip code type (always 'zipCode')
 * @property {string} _format_ - The format of the zip code ('5d' | '9d' | '5d-9d')
 * @property {Array<string>} _values_ - Predefined list of zip code to be used to return a random zip code
 */
export interface IZipCodeSchema {
    _type_: EType.ZIP_CODE;
    _format_?: zipCodeFormat;
    _values_?: Array<string>;
}