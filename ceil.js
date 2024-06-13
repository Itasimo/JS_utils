/**
 * 
 * #### Ceiling a number to a specific number of decimal places
 * 
 * @param {Number} x Number to ceil
 * @param {Number} n Number of decimal places
 * @returns {Number} Returns the ceiled number
 */
module.exports = function ceil(x, n) {
    return Math.ceil(x * Math.pow(10, n)) / Math.pow(10, n);
}