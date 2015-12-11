'use strict';

const newArray = require('../util/new-array');

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
    visited[currentIndex] = true;
    unvisitedDistances[currentIndex] = Infinity;
    distanceMatrix[currentIndex].forEach((distance, neighborIndex) => {
      if (visited[neighborIndex]) {
        return;
      }
      unvisitedDistances[neighborIndex] = distances[neighborIndex] = Math.min(
        distances[neighborIndex],   // previously marked distance
        currentDistance + distance  // newly calculated distance
      );
    });
  };

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
