/**
 * Generate a random ip address
 * @returns {string} random ip address
 */
export const getRandomIPAddress = (): string => Array.from({ length: 4 }, () => Math.floor(Math.random() * 256)).join('.');