export default (array: number[], keyOne: number, keyAnother: number) => {
  const tmp = array[keyOne];
  array[keyOne] = array[keyAnother];
  array[keyAnother] = tmp;
};
