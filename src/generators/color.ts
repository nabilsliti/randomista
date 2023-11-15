import { colorFormat, IColorSchema } from '../interfaces';
import { COLORS, DEFAULT_COLOR_FORMAT } from '../constants';
import { getRandomValue } from './value';

const colorFormats = [ 'name', 'rgb', 'hex', 'any' ];
/**
 *  Return a random number
 * @param {number} maxValue - Value max
 * @returns {number} random number
 */
const randomValue = (maxValue) => Math.floor(Math.random() * maxValue);

/**
 *  Return a random hex color
 * @returns {string} random hex color
 */
const getRandomHexColor = () => `#${ randomValue(16777215).toString(16) }`;

/**
 *  Return a random rgb color
 * @returns {string} random Hex color
 */
const getRandomRgbColor = () => `rgb(${ randomValue(256) }, ${ randomValue(256) }, ${ randomValue(256) })`;

/**
 *  Return a random color
 * @param {IColorSchema} colorSchema
 * @property {Array<string>} colorSchema._values_ - Predefined list of colors to be used to return a random color
 * @param {string} colorSchema._format_ - The format of the color format (default value DEFAULT_COLOR_FORMAT = 'name')
 * @throws {Error} error if the color format is not valid (other than 'name', 'rgb', 'hex', 'any')
 * @returns {string} random color
 */
export const getRandomColor = ({ _values_, _format_ = DEFAULT_COLOR_FORMAT }: IColorSchema = {}) => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }

    if (!colorFormats.includes(_format_ as string)) {
        throw new Error(`Invalid color code format ${ _format_ }`);
    }
    switch (_format_) {
        case 'hex':
            return getRandomHexColor();
        case 'rgb':
            return getRandomRgbColor();
        case 'any':{
            const randomFormat = getRandomValue(colorFormats) as colorFormat;
            return getRandomColor({ _format_: randomFormat });
        }
        case 'name':
        default:
            return getRandomValue(COLORS);
    }
};