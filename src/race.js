/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    promisesArray.map(el =>
      el instanceof Promise
        ? el
            .catch(err => reject(err))
            .then(r => {
              resolve(r);
            })
        : new Promise(r => {
            resolve(r);
          })
    );
  });
  // for (let i = 0; i < promisesArray.length ; i++)
  // {
  //     (promisesArray[i] instanceof Promise ? promisesArray[i] : new Promise(r => { r(promisesArray[i]); } ))
  //         .catch(err => reject(err))
  //         .then(r => { resolve(r); });
  // }
  // });
};
