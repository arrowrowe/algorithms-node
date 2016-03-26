'use strict';

module.exports = length => {
  const transforms = [[]];
  for (let i = length - 2; i >= 0; i--) {
    const countBefore = transforms.length;
    for (let j = i + 1; j < length; j++) {
      for (let k = 0; k < countBefore; k++) {
        transforms.push(
          [[i, j]].concat(transforms[k])
        );
      }
    }
  }
  return transforms;
};
