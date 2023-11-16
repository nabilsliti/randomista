export enum EKeys {
    TYPE = '_type_',
    LENGTH = '_length_',
    FIELD_TYPE = '_fieldType_',
    VALUES = '_values_',
}

export enum EType {
    AMOUNT = 'amount',
    ANIMAL = 'animal',
    BOOLEAN = 'boolean',
    COLOR = 'color',
    DATE = 'date',
    DATE_TIME = 'dateTime',
    TIME = 'time',
    EMAIL = 'email',
    ID = 'id',
    IP = 'ip',
    NULL = 'null',
    UNDEFINED = 'undefined',
    NUMBER = 'number',
    REGEX ='regex',
    WORD ='word',
    SENTENCE = 'sentence',
    URL = 'url',
    OBJECT = 'object',
    ARRAY = 'array',
    CUSTOM = 'custom',
    ZIP_CODE = 'zipCode',
    COUNTRY = 'country',
    CITY = 'city',
    CURRENCY = 'currency',
    COUNTRY_CODE = 'countryCode',
    CREDIT_CARD_NUMBER = 'cardNumber',
    CREDIT_CARD = 'creditCard',
    USER = 'user',
    PHONE = 'phone',
    ADDRESS = 'address',
    STREET = 'street',
    CONTINENT = 'continent'
}

export enum EZipCode {
    '5d'= '#####', // 5-digit zip code (5d)
    '9d'= '#####-####', // 9-digit zip code (9d)
    'any' = 'any', // 5-digit or 9-digit zip code
}