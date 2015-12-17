'use strict';

module.exports = array => {
  let  powerset = [[]];
  array.forEach(element => Array.prototype.push.apply(powerset, powerset.map(s => s.concat([element]))));
  return powerset;
};
