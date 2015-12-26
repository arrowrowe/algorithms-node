'use strict';

const newArray = require('../util/new-array');

/*
  Dijkstra's algorithm
    https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm
  Given
    distanceMatrix[i][j] = distance between Node i and Node j, for every 0 <= i, j < count of all nodes;
    initialIndex, from which node all shortest distances should be calculated.
  Return
    shortest distances from the initial node.
 */
module.exports = (distanceMatrix, initialIndex) => {

  initialIndex = initialIndex || 0;

  const size = distanceMatrix.length;

  let visited = newArray(size, false);
  visited[initialIndex] = true;
  let distances = newArray(size, Infinity);
  distances[initialIndex] = 0;
  let unvisitedDistances = newArray(size, Infinity);

  const visit = currentIndex => {
    const currentDistance = distances[currentIndex];
    // Mark current node as visited.
    visited[currentIndex] = true;
    unvisitedDistances[currentIndex] = Infinity;
    // Loop over all UNVISITED neighbors of current node.
    distanceMatrix[currentIndex].forEach((distance, neighborIndex) => {
      if (visited[neighborIndex]) {
        return;
      }
      // Update this neighbor's distance, if smaller found.
      unvisitedDistances[neighborIndex] = distances[neighborIndex] = Math.min(
        distances[neighborIndex],   // previously marked distance
        currentDistance + distance  // newly calculated distance
      );
    });
  };

  // Visit the initial node first.
  let nextCurrentIndex = initialIndex;
  for(;;) {
    visit(nextCurrentIndex);
    const minUnvisitedDistance = Math.min.apply(null, unvisitedDistances);
    if (minUnvisitedDistance === Infinity) {
      break;
    }
    nextCurrentIndex = unvisitedDistances.indexOf(minUnvisitedDistance);
  }

  return distances;

};
