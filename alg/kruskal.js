'use strict';

const sortBy = require('../util/sort-by');

module.exports = graph => {
  let forest = {
    vertex: graph.vertex,
    edge: []
  };
  let trees = graph.vertex.map(vertex => [vertex]);
  const indexOfTree = vertex => trees.findIndex(tree => tree.indexOf(vertex) >= 0);
  sortBy(edge => edge.distance, Array.apply(null, graph.edge)).forEach(edge => {
    if (trees.length === 1) {
      return;
    }
    const treesIndex = edge.vertex.map(indexOfTree);
    if (treesIndex[0] === treesIndex[1]) {
      return;
    }
    forest.edge.push(edge);
    trees[treesIndex[0]] = trees[treesIndex[0]].concat(trees[treesIndex[1]]);
    trees.splice(treesIndex[1], 1);
  });
  return forest;
};
