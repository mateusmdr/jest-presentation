import {Sum} from '../src/sum-class';

test('1 + 1 should equal 2', () => {
    const number = new Sum(1,1);

    expect(number.sum()).toBe(2);
})