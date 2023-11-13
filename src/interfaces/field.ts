import { EType } from '../enums';

export type ICollectionField = EType.ARRAY | EType.OBJECT;

export type ISimpleField = EType.BOOLEAN |
EType.DATE |
EType.DATE_TIME |
EType.TIME |
EType.EMAIL |
EType.ID |
EType.IP |
EType.NULL |
EType.UNDEFINED |
EType.NUMBER |
EType.REGEX |
EType.WORD |
EType.URL |
EType.SENTENCE |
EType.CUSTOM |
EType.ZIP_CODE |
EType.CITY |
EType.COUNTRY |
EType.CURRENCY |
EType.COUNTRY_CODE |
EType.CARD_NUMBER |
EType.CREDIT_CARD |
EType.PERSON;