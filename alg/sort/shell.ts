import bubble from './bubble.ts';

const gaps: number[] = [701, 301, 132, 57, 23, 10, 4, 1];

const sortWithGap = (array: number[], gap: number): number[] => {
  for (let i: number = 0; i < gap; i++) {
    bubble(array, gap, i);
  }
  return array;
};

export default (array: number[]): number[] => {
  let i: number = 0;
  for (; gaps[i] > array.length && i < gaps.length; i++) {}
  for (; i < gaps.length; i++) {
    sortWithGap(array, gaps[i]);
  }
  return array;
};
