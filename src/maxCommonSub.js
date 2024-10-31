/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  let source;
  let target;
  if (str1.length > str2.length) {
    source = str2;
    target = str1;
  } else {
    source = str1;
    target = str2;
  }
  let result = '';
  const l = source.length;
  for (let j = 0; j < l && result.length < l - j; j++) {
    for (let i = 1; i <= l; i++) {
      const sub = source.substring(j, i);
      if (target.indexOf(sub) !== -1 && sub.length > result.length) {
        result = sub;
      }
    }
  }
  return result;
};
