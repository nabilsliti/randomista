/**
 *  Return a random value from the given values
 * @param {Array<string>} array - List of values
 * @returns {string} random item from the given values
 */
export const getRandomValue = <T>(array: Array<T>): T => array[ Math.floor(Math.random() * array.length) ];
