/**
 * Number schema interface
 * @interface
 * @property {Array<number>} _values_ - Predefined list of number to be used to generate a random number
 * @property {number} _min_ - The minimum number value
 * @property {number} _max_ - The maximum number value
 * @property {boolean} _isInteger_ - Determines whether the random number to be an integer or not
 */
export interface INumberSchema {
    _values_?: Array<number>;
    _min_?: number;
    _max_?: number;
    _isInteger_?: boolean
}