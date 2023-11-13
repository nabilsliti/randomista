import { DOMAINS, PROTOCOLS } from '../constants';
import { getRandomValue } from './value';
import { getRandomWord } from './word';
import { IUrlSchema } from '../interfaces';

/**
 * Generate random url
 * @param {Partial<IDateSchema>} options
 * @param {Array<string>} options._values_ - Predefined list of urls to be used to generate an URL
 * @param {Array<string>} options._protocols_ - Predefined list of protocols to be used to generate an URL
 * @param {Array<string>} options._domains_ - Predefined list of domains to be used to generate an URL
 * @param {Array<string>} options._ports_ - Predefined list of ports to be used to generate an URL
 * @param {Array<string>} options._paths_ - Predefined list of paths to be used to generate an URL
 * @returns random url
 */
export const getRandomUrl = ({ _values_, _protocols_, _domains_, _ports_, _paths_ }: Partial<IUrlSchema> = {}): string => {
    if (Boolean(_values_?.length)) {
        return getRandomValue(_values_);
    }

    const randomProtocol = Boolean(_protocols_?.length) ? getRandomValue(_protocols_) : getRandomValue(PROTOCOLS);
    const randomDomain = Boolean(_domains_?.length) ? getRandomValue(_domains_) : getRandomValue(DOMAINS);
    const randomPort = Boolean(_ports_?.length) ? `:${ getRandomValue(_ports_) }` : '';
    const randomPath = Boolean(_paths_?.length) ?
        getRandomValue(_paths_) :
        `/${ getRandomWord() }`;

    return `${ randomProtocol }://${ randomDomain }${ randomPort }${ randomPath }`;
};