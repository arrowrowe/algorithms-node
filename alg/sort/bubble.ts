import swap from '../../util/swap.ts';

export default (array: number[], gap = 1, start = 0): number[] => {
  for (let bubbled: boolean = true; bubbled; ) {
    bubbled = false;
    for (let i: number = start; i < array.length; i += gap) {
      if (array[i - gap] > array[i]) {
        bubbled = true;
        swap(array, i, i - gap);
      }
    }
  }
  return array;
};
