import { DEFAULT_ARRAY_LENGTH } from './constants';
import { EKeys, EType } from './enums';
import {
    getRandomAddress,
    getRandomAmount,
    getRandomAnimal,
    getRandomBoolean,
    getRandomCardNumber,
    getRandomCity,
    getRandomColor,
    getRandomContinent,
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
    getRandomPhoneNumber,
    getRandomRegex,
    getRandomSentence,
    getRandomStreet,
    getRandomTime,
    getRandomUrl,
    getRandomUser,
    getRandomValue,
    getRandomWord,
    getRandomZipCode
} from './generators';
import {
    IAddress,
    IAddressSchema,
    ICardNumberSchema,
    ICollection,
    ICollectionField,
    IColorSchema,
    ICreditCard,
    ICreditCardSchema,
    IDateSchema,
    IDateTimeSchema,
    IEmailSchema,
    INumberSchema,
    IOptions,
    IRegexSchema,
    ISchema,
    ISentenceSchema,
    ISimpleField,
    ITimeSchema,
    IUrlSchema,
    IUser,
    IUserSchema,
    IValues,
    IWordSchema,
    IZipCodeSchema
} from './interfaces';

const simpleFieldGenerators = {
    [ EType.AMOUNT ]: (options) => getRandomAmount(options as IValues),
    [ EType.ANIMAL ]: (options) => getRandomAnimal(options as IValues),
    [ EType.ADDRESS ]: (options) => getRandomAddress(options as IAddressSchema),
    [ EType.BOOLEAN ]: () => getRandomBoolean(),
    [ EType.CREDIT_CARD_NUMBER ]: (options) => getRandomCardNumber(options as ICardNumberSchema),
    [ EType.CITY ]: (options) => getRandomCity(options as IValues),
    [ EType.COLOR ]: (options) => getRandomColor(options as IColorSchema),
    [ EType.COUNTRY ]: (options) => getRandomCountry(options as IValues),
    [ EType.COUNTRY_CODE ]: (options) => getRandomCountryCode(options as IValues),
    [ EType.CONTINENT ]: (options) => getRandomContinent(options as IValues),
    [ EType.CURRENCY ]: (options) => getRandomCurrency(options as IValues),
    [ EType.CUSTOM ]: (options) => getRandomValue(options[ EKeys.VALUES ]),
    [ EType.CREDIT_CARD ]: (options) => getRandomCreditCard(options as ICreditCardSchema),
    [ EType.DATE ]: (options) => getRandomDate(options as IDateSchema),
    [ EType.DATE_TIME ]: (options) => getRandomDateTime(options as IDateTimeSchema),
    [ EType.EMAIL ]: (options) => getRandomEmail(options as IEmailSchema),
    [ EType.ID ]: () => getRandomId(),
    [ EType.IP ]: () => getRandomIPAddress(),
    [ EType.NUMBER ]: (options) => getRandomNumber(options as INumberSchema),
    [ EType.REGEX ]: (options) => getRandomRegex(options as IRegexSchema),
    [ EType.SENTENCE ]: (options) => getRandomSentence(options as ISentenceSchema),
    [ EType.STREET ]: (options) => getRandomStreet(options as IValues),
    [ EType.TIME ]: (options) => getRandomTime(options as ITimeSchema),
    [ EType.PHONE ]: (options) => getRandomPhoneNumber(options as IValues),
    [ EType.URL ]: (options) => getRandomUrl(options as IUrlSchema),
    [ EType.USER ]: (options) => getRandomUser(options as IUserSchema),
    [ EType.WORD ]: (options) => getRandomWord(options as IWordSchema),
    [ EType.ZIP_CODE ]: (options) => getRandomZipCode(options as IZipCodeSchema),
    [ EType.UNDEFINED ]: () => undefined,
    [ EType.NULL ]: () => null,

};
/**
 * Generate a random value for a given type
 * @param {ISimpleField | ICollectionField} type - Type of the field to generate
 * @param {IOptions} options - Options of the field to generate
 * @returns {string | number | boolean | IUser | ICollection | Array<ISimpleField>} A random value(s) of the given type
 */
const getRandomDatum = (type: ISimpleField | ICollectionField, options: IOptions = {}):
    string | number | boolean | IUser | IAddress | ICreditCard | ICollection | Array<ISimpleField> => {
    if (Object.keys(simpleFieldGenerators).includes(type)) {
        return simpleFieldGenerators[ type ](options);
    }
    if (type === EType.OBJECT) {
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
    } else if (type === EType.ARRAY) {
        const fieldType = options?.[ EKeys.FIELD_TYPE ] || EType.WORD;
        const length = options?.[ EKeys.LENGTH ] || DEFAULT_ARRAY_LENGTH;
        return getRandomArray(fieldType, length, options);
    } else {
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