import { sum } from './sum';


describe('SUM module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(2, 2)).toBe(3)
    });
})
