/**
 * Write a function which returns a formatter function to format address based on input address data
 * Format should be the following: 'street, house, apartment, city, postal-code, country'
 * @returns {function}
 */
module.exports.formatAddress = function formatAddress() {
  return function fetFormatedAddress(objAddress) {
    return Object.keys(objAddress)
      .reduce((acc, key) => acc.concat([objAddress[key]]), [])
      .join(', ');
  };
};
