var isBalanced = require('../../index').isBalanced;
var expect = require('chai').expect;

describe('Is-balanced', () => {
  var T = (src, ret) => expect(isBalanced(src)).to.equal(ret);
  it('checks if a string is balanced', () => {
    T('a', false);
    T('()', true);
    T('(())', true);
    T('(()())', true);
    T('())(()', false);
    T('([]{})', true);
    T('([}]{)', false);
  });
});
