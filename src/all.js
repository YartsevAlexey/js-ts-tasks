/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  let j = promisesArray.length;
  return new Promise((resolve, reject) => {
    const results = [];
    for (let i = 0; i < promisesArray.length; i++) {
      (promisesArray[i] instanceof Promise
        ? promisesArray[i]
        : new Promise(r => {
            r(promisesArray[i]);
          })
      )
        .catch(err => reject(err))
        // eslint-disable-next-line no-loop-func
        .then(r => {
          results[i] = r;
          j -= 1;
          if (j === 0) {
            resolve(results);
          }
        });
    }
  });
};
