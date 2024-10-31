/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator.concat(accumulator.includes(currentValue) ? [] : [currentValue]), []).length;
};
