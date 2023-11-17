import { DEFAULT_ARRAY_LENGTH } from '../src/constants';
import { EType } from '../src/enums';
import { getRandomArray, getRandomData } from '../src/randomista';

describe('getRandomData', () => {
    it('should generate an array of random data with the specified length', () => {
        const schema = {
            name: 'word',
            age: 'number',
            email: 'email'
        };
        const length = 5;
        const result = getRandomData(schema, length);

        expect(result.length).toBe(length);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should generate random data based on the given schema', () => {
        const schema = {
            name: 'word',
            age: 'number',
            email: 'email'
        };
        const length = 5;
        const result = getRandomData(schema, length);

        result.forEach((data) => {
            expect(typeof data.name).toBe('string');
            expect(typeof data.age).toBe('number');
            expect(typeof data.email).toBe('string');
            expect(data.email).toMatch(/\S+@\S+\.\S+/); // check if the email is valid
        });
    });
    it('should generate random data for additional fields in the schema', () => {
        const schema = {
            name: 'word',
            regex: {
                _type_: 'array',
                _fieldType_: 'regex',
                _regex_: /[a-z]+/,
            },
            zip: {
                _type_: 'array',
                _fieldType_: 'zipCode',
                _format_: 'any'
            },
            user: {
                _type_: 'array',
                _fieldType_: 'user',
                _usernames_: [ 'user.one', 'user.two' ],
                _length_: 10
            },
            countries: {
                _type_: 'array',
                _fieldType_: 'country',
                _length_: 100,
            },
            countryCode: {
                _type_: 'array',
                _fieldType_: 'countryCode',
                _length_: 100,
            },
            continent: 'continent',
            creditCard: {
                _type_: 'array',
                _fieldType_: 'creditCard',
                _vendors_: [ 'visa' ],
                _expirationDates_: [ '10/20', '05/30' ],
                _holderNames_: [ 'User One', 'User Two' ],
                _length_: 1,
            },
            amount: 'amount',
            color: 'color',
            animals: {
                _type_: 'array',
                _fieldType_: 'animal',
                _length_: 10,
            },
            addressIp: 'ip',
            cardNumber: {
                _type_: 'array',
                _vendors_: [ 'masterCard', 'visa' ],
                _fieldType_: 'cardNumber',
                _length_: 1,
            },
            currencies: {
                _type_: 'array',
                _fieldType_: 'currency',
                _length_: 5,
            },
            person: {
                _type_: 'array',
                _fieldType_: 'user',
                _firstNames_: [ 'User', 'One' ],
                _length_: 1,
            },
            id: 'id',
            text: 'sentence',
            url: 'url',
            datTime: {
                _type_: 'array',
                _fieldType_: 'dateTime',
                _length_: 5,
            },
            time: {
                _type_: 'array',
                _fieldType_: 'time',
                _length_: 10,
            },
            date: {
                _type_: 'array',
                _fieldType_: 'date',
                _length_: 15,
                _format_: 'MM-dd-yyyy',
            },
            nullValue: 'null',
            undefinedValue: 'undefined',
            age: {
                _type_: 'number',
                _min_: 18,
                _max_: 30,
            },
            isStudent: 'boolean',
            scores: {
                _type_: 'array',
                _fieldType_: 'number',
                _min_: 5,
                _max_: 10,
                _length_: 30,
            },
            address: 'address',
            street: 'street',
            birth_date: {
                _type_: 'array',
                _fieldType_: 'date',
                _min_: new Date(2000, 0, 1),
                _max_: new Date(2022, 11, 31),
                _length_: 5,
                _format_: 'yyyy/MM/dd',
            },
            emails: {
                _type_: 'array',
                _fieldType_: 'email',
            },
            names: {
                _type_: 'array',
                // no _fieldType_ is defined, so it will be 'string' by default
            },
            ratings: {
                _type_: 'array',
                _fieldType_: 'number',
            },
            phone: 'phone',
            isActive: 'boolean',
            friends: {
                _type_: 'array',
                _fieldType_: 'custom',
                _values_: [ 'friend1', 'friend2', 'friend3', 'friend4', 'friend5' ],
                _max_: 4,
            },
            cities: {
                _type_: 'object',
                name: {
                    _type_: 'array',
                    _fieldType_: 'city',
                    _values_: [ 'city1', 'city2', 'city3', 'city4', 'city5' ],
                    _max_: 4
                },
                country: 'country'
            },
            noType: 'noType',
        };
        const length = 5;
        const result = getRandomData(schema, length);
        result.forEach((data) => {
            expect(typeof data.address).toBe('object');
            expect(typeof data.user).toBe('object');
            expect(Array.isArray(data.countries)).toBeTruthy();
            expect(typeof data.phone).toBe('string');
            expect(data.age).toBeGreaterThanOrEqual(18);
            expect(data.age).toBeLessThanOrEqual(30);
        });
    });
    it('should handle empty schema', () => {
        const schema = {}; // Empty schema
        const length = 5;
        const result = getRandomData(schema, length);

        expect(result.length).toBe(length);
        expect(Array.isArray(result)).toBe(true);
    });

    it('should handle length of 0', () => {
        const schema = {
            name: 'word',
            age: 'number',
            email: 'email'
        };
        const length = 0; // Length of 0
        const result = getRandomData(schema, length);

        expect(result.length).toBe(0);
        expect(Array.isArray(result)).toBe(true);
    });
});

describe('getRandomArray', () => {
    it('should generate an array of random values for a given type', () => {
        const result = getRandomArray();
        expect(result).toBeDefined();
        expect(Array.isArray(result)).toBe(true);
        expect(result.length).toBeGreaterThan(0);
    });

    it('should generate an array of default length if length is not provided', () => {
        const result = getRandomArray();
        expect(result.length).toBe(DEFAULT_ARRAY_LENGTH);
    });

    it('should generate an array of the given length', () => {
        const length = 5;
        const result = getRandomArray(EType.NUMBER, length);
        expect(result.length).toBe(length);
    });

    it('should generate an array of random values of the given type', () => {
        const type = EType.BOOLEAN;
        const result = getRandomArray(type);
        result.forEach((item) => {
            expect(item).toBeDefined();
            expect(typeof item).toBe('boolean');
        });
    });

    it('should generate an array of random values with the given options', () => {
        const options = {
            _min_: 1,
            _max_: 10,
        };
        const result = getRandomArray(EType.NUMBER, DEFAULT_ARRAY_LENGTH, options);
        result.forEach((item) => {
            expect(item).toBeGreaterThanOrEqual(options._min_);
            expect(item).toBeLessThanOrEqual(options._max_);
        });
    });
});