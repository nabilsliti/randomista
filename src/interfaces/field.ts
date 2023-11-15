import { EType } from '../enums';

export type ICollectionField = EType.ARRAY | EType.OBJECT;

export type ISimpleField = EType.BOOLEAN |
EType.ANIMAL |
EType.COLOR |
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
EType.ADDRESS |
EType.ZIP_CODE |
EType.STREET |
EType.CITY |
EType.COUNTRY |
EType.CURRENCY |
EType.COUNTRY_CODE |
EType.CREDIT_CARD_NUMBER |
EType.CREDIT_CARD |
EType.USER;