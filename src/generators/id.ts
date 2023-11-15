import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a random id based on uuid()
 * @returns {string} random uuid
 */
export const getRandomId = (): string => uuidv4();