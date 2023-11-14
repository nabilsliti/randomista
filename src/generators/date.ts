import { addYears, compareAsc, differenceInMilliseconds, format } from 'date-fns';
import { FORMAT_DATE, FORMAT_DATE_TIME, FORMAT_TIME, GAP_MAX_YEARS, START_DATE } from '../constants';
import { IDateSchema, IDateTimeSchema, ITimeSchema } from '../interfaces';

/**
 * Generate a random dateTime value
 * @param {Partial<IDateTimeSchema>} dateTimeSchema
 * @param {Date} dateTimeSchema._min_ - The minimum dateTime to generate (default START_DATE = new Date())
 * @param {Date} dateTimeSchema._max_ - The maximum dateTime to generate (default START_DATE + GAP_MAX_YEARS)
 * @param {string} dateTimeSchema._format_ - The format (date-fns) of the dateTime value to generate
 * (default FORMAT_DATE_TIME = `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`)
 * @param {ICollection} dateTimeSchema._options_ - Date-fns format options
 *  _options_ = {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: number
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
    }
 * @throws {Error} Error if `_max_ < _min_`
 * @returns {string} random dateTime value
 */

export const getRandomDateTime = ({
    _min_ = START_DATE,
    _max_,
    _format_ = FORMAT_DATE_TIME,
    _options_
}: Partial<IDateTimeSchema> = {}): string => {
    _max_ ||= addYears(new Date(), GAP_MAX_YEARS);
    if (compareAsc(_min_, _max_) > 0) {
        throw new Error(`Minimum date (${ _max_ }) cannot exceed maximum date (${ _max_ }).`,);
    }
    const randomTimestamp = differenceInMilliseconds(_max_, _min_) * Math.random() + _min_.getTime();
    const randomDate = new Date(randomTimestamp);

    return format(randomDate, _format_, _options_);
};

/**
 * Generate a random date value
 * @param {Partial<IDateSchema>} dateSchema
 * @param {Date} dateSchema._min_ - The minimum date to generate (default START_DATE = new Date())
 * @param {Date} dateSchema._max_ - The maximum date to generate (default START_DATE + GAP_MAX_YEARS)
 * @param {string} dateSchema._format_ - The format (date-fns) of the date value to generate  (default FORMAT_DATE = 'dd/MM/yyyy')
 * @param {ICollection} dateSchema._options_ - Date-fns format options
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

/**
 * Generate a random time
 * @param {Partial<ITimeSchema>} timeSchema
 * @param {string} timeSchema._format_ - The format (date-fns) of the time value to generate (default FORMAT_TIME = 'HH:mm:ss')
 * @returns {string} random time value
 */
export const getRandomTime = ({ _format_ = FORMAT_TIME }: Partial<ITimeSchema> = {}): string => getRandomDateTime({ _format_ });
