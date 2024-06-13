/**
 * 
 * #### Rounding a number to a specific number of decimal places
 * 
 * @param {Number} x Number to round
 * @param {Number} n Number of decimal places
 * @returns {Number} Returns the rounded number
 */
module.exports = function round(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);
}