import { DEFAULT_ARRAY_LENGTH } from './constants';
import { EKeys, EType } from './enums';
import {
    getRandomBoolean,
    getRandomCardNumber,
    getRandomCity,
    getRandomCountry,
    getRandomCountryCode,
    getRandomCreditCard,
    getRandomCurrency,
    getRandomDate,
    getRandomDateTime,
    getRandomEmail,
    getRandomId,
    getRandomIPAddress,
    getRandomNumber,
    getRandomPerson,
    getRandomRegex,
    getRandomSentence,
    getRandomTime,
    getRandomUrl,
    getRandomValue,
    getRandomWord,
    getRandomZipCode
} from './generators';
import {
    ICardNumber,
    ICitySchema,
    ICollection,
    ICollectionField,
    ICountrySchema,
    ICountryCodeSchema,
    ICreditCardSchema,
    ICurrencySchema,
    IDateSchema,
    IDateTimeSchema,
    IEmailSchema,
    INumberSchema,
    IOptions,
    IPersonSchema,
    IRegexSchema,
    ISchema,
    ISentenceSchema,
    ISimpleField,
    ITimeSchema,
    IUrlSchema,
    IWordSchema,
    IZipCodeSchema
} from './interfaces';

/**
 * Generate a random value for a given type
 * @param {ISimpleField | ICollectionField} type - Type of the field to generate
 * @param {IOptions} options - Options of the field to generate
 * @returns {string | number | boolean | ICollection | Array<ISimpleField>} A random value(s) of the given type
 */
const getRandomDatum = (type: ISimpleField | ICollectionField, options: IOptions = {}):
    string | number | boolean | ICollection | Array<ISimpleField> => {
    switch (type) {
        case EType.WORD:
            return getRandomWord(options as Partial<IWordSchema>);

        case EType.BOOLEAN:
            return getRandomBoolean();

        case EType.NUMBER:
            return getRandomNumber(options as Partial<INumberSchema>);

        case EType.DATE:
            return getRandomDate(options as Partial<IDateSchema>);

        case EType.DATE_TIME:
            return getRandomDateTime(options as Partial<IDateTimeSchema>);

        case EType.TIME:
            return getRandomTime(options as Partial<ITimeSchema>);

        case EType.EMAIL:
            return getRandomEmail(options as Partial<IEmailSchema>);

        case EType.ID:
            return getRandomId();

        case EType.IP:
            return getRandomIPAddress();

        case EType.REGEX:
            return getRandomRegex(options as Partial<IRegexSchema>);

        case EType.SENTENCE:
            return getRandomSentence(options as Partial<ISentenceSchema>);

        case EType.URL:
            return getRandomUrl(options as Partial<IUrlSchema>);

        case EType.ZIP_CODE:
            return getRandomZipCode(options as Partial<IZipCodeSchema>);

        case EType.CITY:
            return getRandomCity(options as Partial<ICitySchema>);

        case EType.COUNTRY:
            return getRandomCountry(options as Partial<ICountrySchema>);

        case EType.COUNTRY_CODE:
            return getRandomCountryCode(options as Partial<ICountryCodeSchema>);

        case EType.CURRENCY:
            return getRandomCurrency(options as Partial<ICurrencySchema>);

        case EType.CARD_NUMBER:
            return getRandomCardNumber(options as Partial<ICardNumber>);

        case EType.CREDIT_CARD:
            return getRandomCreditCard(options as Partial<ICreditCardSchema>);

        case EType.PERSON:
            return getRandomPerson(options as Partial<IPersonSchema>);

        case EType.OBJECT: {
            const objectData: ICollection = {};
            for (const key in options as ICollection) {
                if (key !== EKeys.TYPE) {
                    if (options[ key ][ EKeys.TYPE ]) {
                        objectData[ key ] = getRandomDatum(options[ key ][ EKeys.TYPE ], options[ key ]);
                    } else {
                        objectData[ key ] = getRandomDatum(options[ key ]);
                    }
                }
            }
            return objectData;
        }

        case EType.ARRAY: {
            const fieldType = options?.[ EKeys.FIELD_TYPE ] || EType.WORD;
            const length = options?.[ EKeys.LENGTH ] || DEFAULT_ARRAY_LENGTH;
            return getRandomArray(fieldType, length, options);
        }

        case EType.CUSTOM:
            return getRandomValue(options[ EKeys.VALUES ]);

        case EType.UNDEFINED:
            return undefined;

        case EType.NULL:
        default:
            return null;
    }
};

/**
 * Generate an array of random values for a given type
 * @param {ISimpleField} type - The type of field to generate
 * @param {number} length - The length of the array
 * @param {IOptions} options - The options to use for the field
 * @returns {Array<ISimpleField>} An array of random values of the given type
 */
export const getRandomArray = (type: ISimpleField = EType.WORD, length = DEFAULT_ARRAY_LENGTH, options?: IOptions):
    Array<ISimpleField> => {
    const randomData = [];
    for (let i = 0; i < length; i++) {
        randomData.push(getRandomDatum(type, options));
    }
    return randomData;
};

/**
 *  Generates a random data from the given schema
 * @param {ISchema} schema - The schema object to use to generate the random data
 * @param {number} length - The length of the array
 * @returns {Array<ICollection>} An array of random data of the given schema
 */
export const getRandomData = (schema: ISchema, length: number): Array<ICollection> => {
    const randomData: Array<ICollection> = Array.from({ length }, () => {
        const data: ICollection = {};
        for (const key in schema) {
            if (key !== EKeys.TYPE) {
                if (schema[ key ][ EKeys.TYPE ]) {
                    data[ key ] = getRandomDatum(schema[ key ][ EKeys.TYPE ], schema[ key ]);
                } else {
                    data[ key ] = getRandomDatum(schema[ key ] as ISimpleField);
                }
            }
        }
        return data;
    });

    return randomData;
};