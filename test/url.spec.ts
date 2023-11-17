import { getRandomUrl } from '../src/generators';

describe('getRandomUrl', () => {
    it('should generate a random url with default values', () => {
        const url = getRandomUrl();
        expect(url).toMatch(/^(https?|ftp|http?|ftps):\/\/[^\s/$.?#].[^\s]*$/);
    });

    it('should generate a random url from _values_ when _values_ is provided', () => {
        const urlSchema = {
            _values_: [ 'http://example.com/home', 'https://example.org/about' ]
        };
        const url = getRandomUrl(urlSchema);
        expect(url).toMatch(/^(http|https):\/\/(example\.com|example\.org)(\/home|\/about)?$/);
    });

    it('should generate a random url with predefined values when _values_ is not provided', () => {
        const urlSchema = {
            _values_: [],
            _protocols_: [ 'http', 'https' ],
            _domains_: [ 'example.com', 'example.org' ],
            _ports_: [ '8080', '3000' ],
            _paths_: [ '/home', '/about' ],
        };
        const url = getRandomUrl(urlSchema);
        expect(url).toMatch(/^(http|https):\/\/(example\.com|example\.org)(:8080|:3000)?(\/home|\/about)?$/);
    });
});