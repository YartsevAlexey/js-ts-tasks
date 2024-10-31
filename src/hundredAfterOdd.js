/**
 * Write a function which inside given array of numbers puts a number `100` after each odd number.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.hundredAfterOdd = function hundredAfterOdd(arr) {
  return arr.reduce((acc, cur) => acc.concat(!(Math.abs(cur) % 2) ? cur : [cur, 100]), []);
};
