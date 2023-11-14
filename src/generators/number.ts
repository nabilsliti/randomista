import { getRandomValue } from './value';
import { INumberSchema } from '../interfaces';
import { MAXIMUM_NUMBER, MINIMUM_NUMBER } from '../constants';

/**
 * Generate a random number
 * @param {Partial<INumberSchema>} numberSchema
 * @param {number} numberSchema._min_ - The minimum value to generate (default MINIMUM_NUMBER = 1)
 * @param {number} numberSchema._max_ - The maximum value to generate (default MAXIMUM_NUMBER = 100)
 * @throws {Error} Error if `_max_ < _min_`
 * @returns {number} random number between _min_ and _max_
 */
export const getRandomNumber = ({ _values_, _min_ = MINIMUM_NUMBER, _max_ = MAXIMUM_NUMBER }: Partial<INumberSchema> = {}): number => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }
    if (_min_ > _max_) {
        throw new Error(`Minimum number (${ _min_ }) cannot exceed maximum number (${ _max_ }).`,);
    }
    const min = Math.ceil(_min_);
    const max = Math.floor(_max_);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};