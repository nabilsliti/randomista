import { CURRENCIES } from '../src/constants';
import { getRandomAmount, getRandomCardNumber, getRandomCreditCard, getRandomCurrency } from '../src/generators';
import { ICreditCard, ICreditCardSchema } from '../src/interfaces';

describe('getRandomCreditCard', () => {
    test('should return a random credit card details when no schema is provided', () => {
        const result = getRandomCreditCard();
        expect(result).toBeDefined();
        expect(result.vendor).toBeDefined();
        expect(result.number).toBeDefined();
        expect(result.expirationDate).toBeDefined();
        expect(result.ccv).toBeDefined();
        expect(result.holderName).toBeDefined();
    });

    test('should return a random credit card details using the provided schema values', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [],
            _vendors_: [ 'visa' ],
            _numbers_: [ '1234', '5678' ],
            _expirationDates_: [ '02/23', '04/25' ],
            _ccvs_: [ '123', '456' ],
            _holderNames_: [ 'John Doe', 'Jane Smith' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual('visa');
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    test('should return a random credit card details with a random vendor when vendor list is not provided in the schema', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [],
            _numbers_: [ '1234', '5678' ],
            _expirationDates_: [ '02/23', '04/25' ],
            _ccvs_: [ '123', '456' ],
            _holderNames_: [ 'John Doe', 'Jane Smith' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual(expect.any(String));
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    test('should return a random credit card details with a random number when number list is not provided in the schema', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [ ],
            _vendors_: [ 'visa' ],
            _expirationDates_: [ '02/23', '04/25' ],
            _ccvs_: [ '123', '456' ],
            _holderNames_: [ 'John Doe', 'Jane Smith' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual('visa');
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    // eslint-disable-next-line max-len
    test('should return a random credit card details with a random expiration date when expiration date list is not provided in the schema', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [],
            _vendors_: [ 'visa' ],
            _numbers_: [ '1234', '5678' ],
            _ccvs_: [ '123', '456' ],
            _holderNames_: [ 'John Doe', 'Jane Smith' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual('visa');
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    test('should return a random credit card details with a random ccv when ccv list is not provided in the schema', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [],
            _vendors_: [ 'visa' ],
            _numbers_: [ '1234', '5678' ],
            _expirationDates_: [ '02/23', '04/25' ],
            _holderNames_: [ 'John Doe', 'Jane Smith' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual('visa');
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    test('should return a random credit card details with a random holder name when holder name list is not provided in the schema', () => {
        const creditCardSchema: ICreditCardSchema = {
            _values_: [ ],
            _vendors_: [ 'visa' ],
            _numbers_: [ '1234', '5678' ],
            _expirationDates_: [ '02/23', '04/25' ],
            _ccvs_: [ '123', '456' ]
        };
        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(result.vendor).toEqual('visa');
        expect(result.number).toEqual(expect.any(String));
        expect(result.expirationDate).toEqual(expect.any(String));
        expect(result.ccv).toEqual(expect.any(String));
        expect(result.holderName).toEqual(expect.any(String));
    });

    test('should return a random credit card details from given values', () => {
        const creditCards: Array<ICreditCard> = [
            {
                vendor: 'visa',
                number: '41245667788287',
                expirationDate: '02/23',
                ccv: '456',
                holderName: 'John Doe'
            },
            {
                vendor: 'masterCard',
                number: '51245667788287',
                expirationDate: '10/27',
                ccv: '188',
                holderName: 'Joe bely'
            },
            {
                vendor: 'americanExpress',
                number: '31245667788287',
                expirationDate: '10/30',
                ccv: '234',
                holderName: 'Adam bely'
            },
        ];
        const creditCardSchema: ICreditCardSchema = {
            _values_: creditCards
        };

        const result = getRandomCreditCard(creditCardSchema);
        expect(result).toBeDefined();
        expect(creditCards).toContain(result);
    });
});

describe('getRandomCardNumber', () => {
    test('should return a random card number when no options are provided', () => {
        const cardNumber = getRandomCardNumber();
        expect(cardNumber).toMatch(/^5[1-5][0-9]{14}|^4[0-9]{12}(?:[0-9]{3})?|^3[47][0-9]{13}$|^6(?:011|5[0-9]{2})[0-9]{12}$/);
    });

    test('should return a random card number from the provided list of numbers', () => {
        const options = { _values_: [ '1234567890123456', '9876543210987654' ] };
        const cardNumber = getRandomCardNumber(options);
        expect([ '1234567890123456', '9876543210987654' ]).toContain(cardNumber);
    });

    test('should return a random card number from the provided list of vendors', () => {
        const options = { _vendors_: [ 'visa', 'masterCard' ] };
        const cardNumber = getRandomCardNumber(options);
        expect(cardNumber).toMatch(/^5[1-5][0-9]{14}|^4[0-9]{12}(?:[0-9]{3})?$/);
        expect([ '4', '5' ]).toContain(cardNumber.charAt(0));
    });
});

describe('getRandomCurrency', () => {
    it('should return a random currency from the provided list', () => {
        const currencySchema = { _values_: [ 'USD', 'EUR', 'JPY' ] };
        const result = getRandomCurrency(currencySchema);
        expect(currencySchema._values_).toContain(result);
    });

    it('should return a random currency from the default list if no values are provided', () => {
        const result = getRandomCurrency();
        expect(Object.keys(CURRENCIES)).toContain(result);
    });
});

describe('getRandomAmount', () => {
    it('should return a random amount with given values', () => {
        const amountSchema = {
            _values_: [ '€10.00', '$20', '$30.05' ],
            _currencies_: [],
        };
        const amount = getRandomAmount(amountSchema);
        expect(amount).toMatch(/^(?:\€10\.00|\$20|\$30\.05)$/);
    });

    it('should return a random amount with given currencies', () => {
        const amountSchema = {
            _currencies_: [ 'USD', 'EUR' ],
        };
        const amount = getRandomAmount(amountSchema);
        expect(amount).toMatch(/^[$€]?-?\d{1,3}(,\d{3})*\.\d{2}$/);
    });

    it('should return a random amount without symbol', () => {
        const amountSchema = {
            _withSymbol_: false,
        };
        const amount = getRandomAmount(amountSchema);
        expect(amount).toMatch(/^-?\d{1,3}(,\d{3})*\.\d{2}$/);
    });

    it('should return a random amount when no schema is provided', () => {
        const amount = getRandomAmount();
        expect(amount).toBeDefined();
    });
});
