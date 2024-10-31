/**
 * Write a function which removes from given array items are equal a given value
 * @param {Object} arr
 * @param {Object | number | string | boolean} value
 * @returns {Object}
 */
module.exports.removeItems = function removeItems(arr, value) {
  function isEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
      return false;
    }

    return keys1.every(key => keys2.includes(key) && isEqual(obj1[key], obj2[key]));
  }

  const arrNew = [];
  arr.forEach(el => {
    if (!isEqual(el, value)) {
      arrNew.push(el);
    }
  });
  return arrNew;
};
