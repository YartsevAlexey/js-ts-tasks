/**
 * Write a function determining if the provided string/number is a pangram
 * A string is a pangram if every lowercase letter of the alphabet (a, b, c, ... z) is used at least once
 * A number is a pangram if every digit number (0, 1, 2, ... 9) is used at least once
 * @param {string|number} word
 * @returns {boolean}
 */
module.exports.pangram = function (word: string | number): boolean {
  const ENGLISH_ALPHABET_LETTERS_COUNT = 26;
  const DECIMAL_DIGITS_COUNT = 10;

  // remove unnesessery symbols
  const uniword = typeof word === 'string' ? word.toLowerCase().replace(/[^a-z]/g, '') : word.toString(); // working with decimal numbers only by default radix

  const mapper = new Map();
  uniword.split('').forEach(el => mapper.set(el, false));

  return mapper.size === (typeof word === 'string' ? ENGLISH_ALPHABET_LETTERS_COUNT : DECIMAL_DIGITS_COUNT);
};
