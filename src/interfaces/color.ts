import { EType } from '../enums';

export type colorFormat = 'name' | 'hex' | 'rgb' | 'any';

/**
 * Color schema interface
 * @interface
 * @property {string} _type_ - color type (always 'color')
 * @property {Array<string>} _values_ - Predefined list of colors (name, rgb or hex) to be used to generate a random color
 * @property {string} _format_ - The format of the color ('name' | 'hex' | 'rgb' | 'any')
 */
export interface IColorSchema {
    _type_: EType.COLOR;
    _values_?: Array<string>;
    _format_?: colorFormat;
}