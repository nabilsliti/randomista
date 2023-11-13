import { addYears, compareAsc, differenceInMilliseconds, format } from 'date-fns';
import { FORMAT_DATE_TIME, GAP_MAX_YEARS, START_DATE } from '../constants';
import { IDateTimeSchema } from '../interfaces';

/**
 * Generate a random dateTime value
 * @param {Partial<IDateTimeSchema>} options
 * @param {Date} options._min_ - The minimum dateTime to generate (default START_DATE = new Date())
 * @param {Date} options._max_ - The maximum dateTime to generate (default START_DATE + GAP_MAX_YEARS)
 * @param {string} options._format_ - The format (date-fns) of the dateTime value to generate
 * (default FORMAT_DATE_TIME = `yyyy-MM-dd'T'HH:mm:ss.SSSXXX`)
 * @param {ICollection} options._options_ - Date-fns format options
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