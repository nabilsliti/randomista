import { ICollection } from './field';

/**
 * Date schema interface
 * @interface
 * @property {Date} _min_ - The minimum date value
 * @property {Date} _max_ - The maximum date value
 * @property {string} _format_ - The format of the date (use date-fns date format)
 * @property {ICollection} _options_ - `The date-fns options` to be passed to the format function
 * `_options_ = {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: number
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
    }`
 */
export interface IDateSchema {
    _min_?: Date;
    _max_?: Date;
    _format_?: string;
    _options_?: ICollection
}

/**
 * DateTime schema interface
 * @interface
 * @property {Date} _min_ - The minimum date value
 * @property {Date} _max_ - The maximum date value
 * @property {string} _format_ - The format of the dateTime (use date-fns dateTime format)
 * @property {ICollection} _options_ - `The date-fns options` to be passed to the format function
 * `_options_ = {
        locale?: Locale
        weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6
        firstWeekContainsDate?: number
        useAdditionalWeekYearTokens?: boolean
        useAdditionalDayOfYearTokens?: boolean
    }`
 */
export interface IDateTimeSchema {
    _min_?: Date;
    _max_?: Date;
    _format_?: string;
    _options_?: ICollection
}

/**
 * Time schema interface
 * @interface
 * @property {string} _format_ - The format of the time (use date-fns time format)
 */
export interface ITimeSchema {
    _format_?: string;
}