import { FORMAT_DATE, START_DATE } from '../constants';
import { getRandomDateTime } from './dateTime';
import { IDateSchema } from '../interfaces';

/**
 * Generate a random date value
 * @param {Partial<IDateSchema>} options
 * @param {Date} options._min_ - The minimum date to generate (default START_DATE = new Date())
 * @param {Date} options._max_ - The maximum date to generate (default START_DATE + GAP_MAX_YEARS)
 * @param {string} options._format_ - The format (date-fns) of the date value to generate  (default FORMAT_DATE = 'dd/MM/yyyy')
 * @param {ICollection} options._options_ - Date-fns format options
 *  `_options_ = {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: number
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
    }`
 * @returns {string} random date value
 */
export const getRandomDate = ({ _min_ = START_DATE, _max_, _format_ = FORMAT_DATE, _options_ }: Partial<IDateSchema> = {}): string =>
    getRandomDateTime({ _min_, _max_, _format_, _options_ });