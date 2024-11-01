/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  return function sieveOfEratosthenes(minValue, maxValue) {
    // Eratosphen optimized
    const arrNotPrime = [];
    for (let i = 2; i <= Math.min(highestNumber, maxValue); i++) {
      if (arrNotPrime[i] !== true) {
        for (let j = i ** 2; j <= highestNumber; j += i) {
          // if (j >= minValue) // if optimization by memory
          arrNotPrime[j] = true; // if optimization by speed
        }
      }
    }

    const arrPrime = [];
    for (let k = minValue; k <= maxValue; k++) {
      if (arrNotPrime[k] === undefined) {
        arrPrime.push(k);
      }
    }
    return arrPrime;
  };
};
