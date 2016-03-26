'use strict';

module.exports = array => {
  const powerset = [[]];
  array.forEach(element => Array.prototype.push.apply(powerset, powerset.map(s => s.concat([element]))));
  return powerset;
};
