import { CONTINENTS, STREETS } from '../src/constants';
import {
    getRandomAddress,
    getRandomCity,
    getRandomContinent,
    getRandomCountry,
    getRandomCountryCode,
    getRandomStreet,
    getRandomZipCode
} from '../src/generators';
import { IZipCodeSchema } from '../src/interfaces';

describe('getRandomAddress', () => {
    it('should generate a random address with default schema', () => {
        const address = getRandomAddress();

        expect(address).toBeDefined();
        expect(address.zip).toBeDefined();
        expect(address.street).toBeDefined();
        expect(address.city).toBeDefined();
        expect(address.country).toBeDefined();
    });

    it('should generate a random address using custom values', () => {
        const addressSchema = {
            _values_: [
                { zip: '12345', street: 'Main St', city: 'New York', country: 'USA' },
                { zip: '54321', street: 'Broadway', city: 'Los Angeles', country: 'USA' },
            ],
        };
        const address = getRandomAddress(addressSchema);

        expect(address).toBeDefined();
        expect(address.zip).toEqual(expect.stringMatching(/^(12345|54321)$/));
        expect(address.street).toEqual(expect.stringMatching(/^(Main St|Broadway)$/));
        expect(address.city).toEqual(expect.stringMatching(/^(New York|Los Angeles)$/));
        expect(address.country).toEqual('USA');
    });

    it('should generate a random address with custom zip codes', () => {
        const addressSchema = {
            _zips_: [ '12345', '54321' ],
        };
        const address = getRandomAddress(addressSchema);

        expect(address).toBeDefined();
        expect(address.zip).toEqual(expect.stringMatching(/^(12345|54321)$/));
        expect(address.street).toBeDefined();
        expect(address.city).toBeDefined();
        expect(address.country).toBeDefined();
    });

    it('should generate a random address with custom streets', () => {
        const addressSchema = {
            _streets_: [ 'Main St', 'Broadway' ],
        };
        const address = getRandomAddress(addressSchema);

        expect(address).toBeDefined();
        expect(address.zip).toBeDefined();
        expect(address.street).toEqual(expect.stringMatching(/^(Main St|Broadway)$/));
        expect(address.city).toBeDefined();
        expect(address.country).toBeDefined();
    });

    it('should generate a random address with custom cities', () => {
        const addressSchema = {
            _cities_: [ 'New York', 'Los Angeles' ],
        };
        const address = getRandomAddress(addressSchema);

        expect(address).toBeDefined();
        expect(address.zip).toBeDefined();
        expect(address.street).toBeDefined();
        expect(address.city).toEqual(expect.stringMatching(/^(New York|Los Angeles)$/));
        expect(address.country).toBeDefined();
    });

    it('should generate a random address with custom countries', () => {
        const addressSchema = {
            _countries_: [ 'USA', 'Canada' ],
        };
        const address = getRandomAddress(addressSchema);

        expect(address).toBeDefined();
        expect(address.zip).toBeDefined();
        expect(address.street).toBeDefined();
        expect(address.city).toBeDefined();
        expect(address.country).toEqual(expect.stringMatching(/^(USA|Canada)$/));
    });
});

describe('getRandomZipCode', () => {
    it('should return a random zip code when _values_ is provided', () => {
        const zipCodeSchema = {
            _values_: [ '12345', '67890', '54321' ]
        };

        const result = getRandomZipCode(zipCodeSchema);

        // Assert that the result is one of the provided zip codes
        expect(zipCodeSchema._values_).toContain(result);
    });

    it('should return a random zip code when _format_ is "any"', () => {
        const zipCodeSchema: IZipCodeSchema = {
            _format_: 'any'
        };
        const result = getRandomZipCode(zipCodeSchema);

        // Assert that the result is a string
        expect(typeof result).toBe('string');

        // Assert that the result has exactly 5 or 9 digits
        expect([ 5, 10 ]).toEqual(expect.arrayContaining([ result.length ]));
    });

    it('should return a random zip code when _format_ is "5d"', () => {
        const zipCodeSchema: IZipCodeSchema = {
            _format_: '5d'
        };

        const result = getRandomZipCode(zipCodeSchema);

        // Assert that the result is a string
        expect(typeof result).toBe('string');

        // Assert that the result has exactly 5 digits
        expect(result.length).toBe(5);
    });

    it('should return a random zip code when _format_ is "9d"', () => {
        const zipCodeSchema: IZipCodeSchema = {
            _format_: '9d'
        };

        const result = getRandomZipCode(zipCodeSchema);

        // Assert that the result is a string
        expect(typeof result).toBe('string');

        // Assert that the result has exactly 9 digits '#####-####'
        expect(result.length).toBe(10);
    });

    it('should return a random zip code when no schema is provided', () => {
        const result = getRandomZipCode();

        // Assert that the result is a string
        expect(typeof result).toBe('string');

        // Assert that the result has exactly 5 or 9 digits
        expect([ 5, 10 ]).toEqual(expect.arrayContaining([ result.length ]));
    });

    it('should throw an error when _format_ is invalid', () => {
        const zipCodeSchema = {
            _format_: 'invalid'
        };

        // Assert that calling the function with an invalid format throws an error
        expect(() => getRandomZipCode(zipCodeSchema as IZipCodeSchema)).toThrowError('Invalid zip code format invalid');
    });
});

describe('getRandomCountryCode', () => {
    it('should return a random country code', () => {
        const countryCode = getRandomCountryCode();
        expect(typeof countryCode).toBe('string');
    });

    it('should return a country code from the provided list if one is provided', () => {
        const countryCodeList = [ 'US', 'CA', 'GB' ];
        const countryCode = getRandomCountryCode({ _values_: countryCodeList });
        expect(countryCodeList.includes(countryCode)).toBe(true);
    });
});

describe('getRandomCountry', () => {
    it('should return a random country when no parameters are provided', () => {
        const country = getRandomCountry();
        expect(typeof country).toBe('string');
    });

    it('should return a random country from the provided list', () => {
        const countryList = [ 'Country A', 'Country B', 'Country C' ];
        const country = getRandomCountry({ _values_: countryList });
        expect(countryList).toContain(country);
    });

    it('should return a random country from COUNTRIES when an empty country list is provided', () => {
        const countryList: string[] = [];
        const country = getRandomCountry({ _values_: countryList });
        expect(country).toBeDefined();
    });

    it('should return a random country when a single country is provided', () => {
        const countryList = [ 'Country A' ];
        const country = getRandomCountry({ _values_: countryList });
        expect(country).toBe('Country A');
    });

    it('should return a random country when duplicate values are present in the country list', () => {
        const countryList = [ 'Country A', 'Country B', 'Country A' ];
        const country = getRandomCountry({ _values_: countryList });
        expect(countryList).toContain(country);
    });
});

describe('getRandomCity', () => {
    it('should return a random city from the predefined list', () => {
        const citySchema = {
            _values_: [ 'New York', 'London', 'Paris', 'Tokyo' ],
        };
        const result = getRandomCity(citySchema);
        expect(citySchema._values_).toContain(result);
    });

    it('should return a capital of random country if no predefined list is provided', () => {
        const result = getRandomCity();
        expect(result).toBeDefined();
    });
});

describe('getRandomStreet', () => {
    it('should return a random street from the predefined list', () => {
        // Test case 1: When a list of streets is provided, it should return a random street from that list
        const streetSchema1 = {
            _values_: [ 'Street 1', 'Street 2', 'Street 3' ]
        };
        const result1 = getRandomStreet(streetSchema1);
        expect(streetSchema1._values_).toContain(result1);

        // Test case 2: When no list of streets is provided, it should return a random street from the default list
        const result2 = getRandomStreet();
        expect(STREETS).toContain(result2);
    });

    it('should return a random street from STREETS when the predefined list is empty', () => {
        // Test case 3: When an empty list of streets is provided, it should return a random street from the default list
        const streetSchema3 = {
            _values_: []
        };
        const result3 = getRandomStreet(streetSchema3);
        expect(STREETS).toContain(result3);
    });
});

describe('getRandomContinent', () => {
    it('should return a random continent from the predefined list', () => {
        const continent = getRandomContinent();
        expect(CONTINENTS).toContain(continent);
    });

    it('should return a random continent from the provided list', () => {
        const continentSchema = {
            _values_: [ 'Asia', 'Europe', 'North America' ]
        };
        const continent = getRandomContinent(continentSchema);
        expect(continentSchema._values_).toContain(continent);
    });

    it('should return random continent from the default list if no continent is available', () => {
        const continentSchema = {
            _values_: []
        };
        const continent = getRandomContinent(continentSchema);
        expect(CONTINENTS).toContain(continent);
    });
});