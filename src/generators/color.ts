import { COLOR_FORMATS, COLORS, DEFAULT_COLOR_FORMAT } from '../constants';
import { colorFormat, IColorSchema } from '../interfaces';
import { getRandomRegex } from './regex';
import { getRandomValue } from './value';

/**
 *  Return a random hex color
 * @returns {string} random hex color
 */
const getRandomHexColor = () => getRandomRegex({ _regex_: /^#[0-9a-fA-F]{6}$/ });

/**
 *  Return a random rgb color
 * @returns {string} random Hex color
 */
const getRandomRgbColor = () => getRandomRegex({ _regex_: /^rgb\(\d{1,3}, \d{1,3}, \d{1,3}\)$/ });

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

    if (!COLOR_FORMATS.includes(_format_ as string)) {
        throw new Error(`Invalid color code format ${ _format_ }`);
    }
    switch (_format_) {
        case 'hex':
            return getRandomHexColor();
        case 'rgb':
            return getRandomRgbColor();
        case 'any':{
            const randomFormat = getRandomValue(COLOR_FORMATS) as colorFormat;
            return getRandomColor({ _format_: randomFormat });
        }
        case 'name':
        default:
            return getRandomValue(COLORS);
    }
};