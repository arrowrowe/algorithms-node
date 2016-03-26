import chai = require('chai');
const expect = chai.expect;

import Sort from '../alg/sort.ts';

const copy = (array: number[]): number[] => Array.apply([], array);

describe('Sort algorithms', () => {

  const T = (array: number[]) => {
    const result: number[] = copy(array);
    result.sort();
    for (let methodName in Sort) {
      const src: number[] = copy(array);
      expect(Sort[methodName](src)).to.eql(result);
    }
  };

  it('sorts a given array', () => {
    T([3, 1, 2, 1]);
    T([5, 8, 7, 6, 9, 3, 4, 2, 2, 9, 0, 1]);
  });

});
