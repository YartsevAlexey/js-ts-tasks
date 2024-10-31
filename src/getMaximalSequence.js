/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let arrMax = [arr[0]];
  let arrTemp = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (arrTemp[0] !== arr[i]) {
      if (arrTemp.length > arrMax.length) {
        arrMax = [...arrTemp];
      }
      arrTemp = [arr[i]];
    } else {
      arrTemp.push(arr[i]);
    }
  }
  if (arrTemp.length > arrMax.length) {
    arrMax = [...arrTemp];
  }
  return arrMax;
};
