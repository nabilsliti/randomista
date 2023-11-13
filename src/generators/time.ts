import { FORMAT_TIME } from '../constants';
import { getRandomDateTime } from './dateTime';
import { ITimeSchema } from '../interfaces';

/**
 * Generate a random time
 * @param {Partial<ITimeSchema>} options
 * @param {string} options._format_ - The format (date-fns) of the time value to generate (default FORMAT_TIME = 'HH:mm:ss')
 * @returns {string} random time value
 */
export const getRandomTime = ({ _format_ = FORMAT_TIME }: Partial<ITimeSchema> = {}) => getRandomDateTime({ _format_ });
