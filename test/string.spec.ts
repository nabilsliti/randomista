import { getRandomSentence, getRandomWord } from '../src/generators';

describe('getRandomWord', () => {
    it('should return a random word with no prefix and suffix if no wordSchema is provided', () => {
        const result = getRandomWord();
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
    });

    it('should return a random word from the provided list of values', () => {
        const wordSchema = {
            _values_: [ 'apple', 'banana', 'cherry' ]
        };
        const result = getRandomWord(wordSchema);
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        expect(result).toMatch(/apple|banana|cherry/);
    });

    it('should return a random word with the provided prefix', () => {
        const wordSchema = {
            _prefix_: 'pre-'
        };
        const result = getRandomWord(wordSchema);
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        expect(result).toMatch(/^pre-/);
    });

    it('should return a random word with the provided suffix', () => {
        const wordSchema = {
            _suffix_: '-suf'
        };
        const result = getRandomWord(wordSchema);
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        expect(result).toMatch(/-suf$/);
    });

    it('should return a random word with the provided prefix and suffix', () => {
        const wordSchema = {
            _prefix_: 'pre-',
            _suffix_: '-suf'
        };
        const result = getRandomWord(wordSchema);
        expect(typeof result).toBe('string');
        expect(result.length).toBeGreaterThan(0);
        expect(result).toMatch(/^pre-.*-suf$/);
    });
});

describe('getRandomSentence', () => {
    it('should return a random sentence when _values_ is provided', () => {
        const sentenceSchema = { _values_: [ 'This is a sentence', 'Another sentence' ] };
        const result = getRandomSentence(sentenceSchema);
        expect(sentenceSchema._values_).toContain(result);
    });

    it('should return a random sentence when _values_ is not provided', () => {
        const result = getRandomSentence();
        expect(result).toBeDefined();
    });

    it('should return a sentence with at least the minimum number of words', () => {
        const sentenceSchema = { _min_: 5 };
        const result = getRandomSentence(sentenceSchema);
        const words = result.split(' ');
        expect(words.length).toBeGreaterThanOrEqual(sentenceSchema._min_);
    });

    it('should return a sentence with at most the maximum number of words', () => {
        const sentenceSchema = { _max_: 10 };
        const result = getRandomSentence(sentenceSchema);
        const words = result.split(' ');
        expect(words.length).toBeLessThanOrEqual(sentenceSchema._max_);
    });
});