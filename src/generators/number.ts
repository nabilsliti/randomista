import { getRandomValue } from './value';
import { INumberSchema } from '../interfaces';
import { MAXIMUM_NUMBER, MINIMUM_NUMBER } from '../constants';

/**
 * Generate a random number
 * @param {INumberSchema} numberSchema
 * @param {number} numberSchema._min_ - The minimum value to generate (default MINIMUM_NUMBER = 1)
 * @param {number} numberSchema._max_ - The maximum value to generate (default MAXIMUM_NUMBER = 100)
 * @param {boolean} _isInteger_ - Determines whether the random number to be an integer or not (by defalut = false)
 * @throws {Error} Error if `_max_ < _min_`
 * @returns {number} random number between _min_ and _max_
 */
export const getRandomNumber = ({
    _values_,
    _min_ = MINIMUM_NUMBER,
    _max_ = MAXIMUM_NUMBER,
    _isInteger_ = false
}: INumberSchema = {}): number => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    if (_min_ > _max_) {
        throw new Error(`Minimum number (${ _min_ }) cannot exceed maximum number (${ _max_ }).`,);
    }
    const min = _isInteger_ ? Math.ceil(_min_) : _min_;
    const max = _isInteger_ ? Math.floor(_max_) : _max_;
    return Math.floor(Math.random() * (max - _min_ + 1)) + min;
};