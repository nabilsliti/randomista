import { getRandomIPAddress } from '../src/generators';

describe('getRandomIPAddress', () => {
    it('should return a valid IP address with four parts separated by periods', () => {
        const ipAddress = getRandomIPAddress();
        const parts = ipAddress.split('.');
        expect(parts.length).toBe(4);
        expect(parts.every(part => /^\d+$/.test(part))).toBe(true);
    });

    it('should return different IP addresses on different invocations', () => {
        const ipAddress1 = getRandomIPAddress();
        const ipAddress2 = getRandomIPAddress();
        expect(ipAddress1).not.toBe(ipAddress2);
    });
});