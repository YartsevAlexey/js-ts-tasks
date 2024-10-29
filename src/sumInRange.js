/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const x = Math.min(+start, +end);
  const y = Math.max(+start, +end);
  return (y ** 2 - x ** 2 + y - x) / 2 + x;
};
