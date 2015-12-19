'use strict';

const telpad = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

module.exports = char => {
  let index = telpad.findIndex(s => s.indexOf(char) > -1);
  return index === -1 ? '' : (index + 2).toString();
};
