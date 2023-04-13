import { stringifyObject, SpellBooks } from "./QueryStrings";

describe('QueryStrings', () => {
    it('should stringify object', () => {
        let testObject = {
            name: 'Test',
            testing: true,
            iteration: 99
        };
        expect(stringifyObject(testObject)).toBe('name: "Test",\ntesting: true,\niteration: 99,\n');
    });
});