'use strict';

const sortBy = require('../util/sort-by');

/*
  Kruskal's algorithm
    https://en.wikipedia.org/wiki/Kruskal%27s_algorithm
  Given
    graph = {
      vertex: [names of each node],
      edge: [{
        vertex: [names of an edge's two vertexes], distance
      }, ...]
    }
  Return
    another graph with same vertexes but fewer edges.
  The new graph is a tree with possibly minimized total distances.
 */
module.exports = graph => {
  // The new graph to be returned.
  let forest = {
    vertex: graph.vertex,
    edge: []
  };
  // All trees in the forest defined above. Initially, each tree has only one vertex.
  let trees = graph.vertex.map(vertex => [vertex]);
  // Find the index of the tree that one vertex belongs to.
  const indexOfTree = vertex => trees.findIndex(tree => tree.indexOf(vertex) >= 0);
  // Loop over all edges from short to long.
  sortBy(edge => edge.distance, Array.apply(null, graph.edge)).forEach(edge => {
    // We are already done if the forest has only one tree.
    if (trees.length === 1) {
      return;
    }
    const treesIndex = edge.vertex.map(indexOfTree);
    // The current edge is unnecessary if its vertexes belongs to one same tree.
    if (treesIndex[0] === treesIndex[1]) {
      return;
    }
    // Otherwise, add this edge to the forest.
    forest.edge.push(edge);
    // Now combine two trees of each vertex.
    trees[treesIndex[0]] = trees[treesIndex[0]].concat(trees[treesIndex[1]]);
    trees.splice(treesIndex[1], 1);
  });
  return forest;
};
