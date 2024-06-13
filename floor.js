/**
 * 
 * #### Flooring a number to a specific number of decimal places
 * 
 * @param {Number} x Number to floor
 * @param {Number} n Number of decimal places
 * @returns {Number} Returns the floored number
 */
module.exports = function floor(x, n) {
    return Math.floor(x * Math.pow(10, n)) / Math.pow(10, n);
}