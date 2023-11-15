import { IValues } from './schema';

export type colorFormat = 'name' | 'hex' | 'rgb' | 'any';

/**
 * Color schema interface
 * @interface
 * @property {Array<string>} _values_ - Predefined list of colors (name, rgb or hex) to be used to generate a random color
 * @property {string} _format_ - The format of the color ('name' | 'hex' | 'rgb' | 'any')
 */
export interface IColorSchema extends IValues {
    _format_?: colorFormat;
}