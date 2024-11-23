/**
 * Write a function that returns a function that
 * 1) converts all uppercase letters into lowercase letters
 * 2) removes all non-alphanumeric characters
 * 3) returns a result of a calling isPalindrome function from TestUtils object
 *
 * Note: Alphanumeric characters include letters and numbers.
 *
 * Note: You MUST call isPalindrome function from TestUtils object
 * Note: DON'T require/import TestUtils from a test/testUtils
 *
 * @param {{ isPalindrome: function() }} TestUtils
 * @returns {function}
 */
module.exports.palindrome = function palindrome(TestUtils) {
  return function isPalindromeTest(str) {
    const strLowerCase = str.toLowerCase();
    const strClean = strLowerCase.replace(/[^\p{Ll}\p{N}]/gu, ''); // remove Caret, leave Any lower alpha in unicode, any digits
    return TestUtils.isPalindrome.apply({ str: strClean });
    // return TestUtils.isPalindrome.apply({ str: str.toLowerCase().replace(/[^a-z0-9]/g, '') });
  };
};
