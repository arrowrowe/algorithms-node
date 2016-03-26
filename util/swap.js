module.exports = (object, keyOne, keyAnother) => {
  const tmp = object[keyOne];
  object[keyOne] = object[keyAnother];
  object[keyAnother] = tmp;
};
