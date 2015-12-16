'use strict';

const flatten = require('../../util/flatten');

const permutationSimple = module.exports = array => array.length < 2 ?
  [array] :
  flatten(
    array.map((element, index) =>
      permutationSimple(array.slice(0, index).concat(array.slice(index + 1, array.length)))
        .map(short => [element].concat(short))
    )
  );
