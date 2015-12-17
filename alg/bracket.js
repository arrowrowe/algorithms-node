'use strict';

module.exports = n => {
  let oldBrackets = [{text: '(', height: 1}];
  let newBrackets = [];
  for (let i = 1; i < 2 * n; i++) {
    newBrackets = [];
    oldBrackets.forEach(b => {
      if (b.height) {
        newBrackets.push({text: b.text + ')', height: b.height - 1});
      }
      if (b.height + i < 2 * n) {
        newBrackets.push({text: b.text + '(', height: b.height + 1});
      }
    });
    oldBrackets = newBrackets;
  }
  return newBrackets.map(b => b.text);
};
