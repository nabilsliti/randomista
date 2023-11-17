import { getRandomRegex } from '../src/generators';
import { IRegexSchema } from '../src/interfaces';

describe('getRandomRegex', () => {
    it('should return a random value matching the regex pattern', () => {
        const regexSchema: IRegexSchema = {
            _regex_: /^test\d{2}$/,
        };

        const result = getRandomRegex(regexSchema);

        expect(result).toMatch(regexSchema._regex_);
    });
});