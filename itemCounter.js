/**
 * ### Count the number of times a value appears in an array
 * 
 * @this Array The array to count the value in.
 * @param {Number | String} value - The value to count.
 * @returns {Number} The number of times the value appears in the array.
 * 
 */

module.exports = Array.prototype.itemCounter = function (value) {
        return this.filter((x) => x == value).length;
} 