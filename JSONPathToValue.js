/**
 * #### Retrieves the value from a JSON object based on the given path.
 * 
 *
 * @this JSON The array to count the value in.
 * @param {string} path - The path to the desired value in dot notation.
 * @returns {JSON | null} - The value found at the specified path, or null if not found.
 * @throws {InvalidArgumentException} - If jsonData is not an object or if path is undefined.
 */

module.exports = Object.prototype.jsonPathToValue = function(path) {
    if (typeof this !== 'object') {
        throw new InvalidArgumentException('jsonData must be an object.');
    }
    if (typeof path === 'undefined') {
        throw new InvalidArgumentException('path must be defined.');
    }
    if (path === '') {
        return this;
    }
    let keys = path.split('.');
    let result = this;
    for (let key of keys) {
        if (typeof result[key] === 'undefined') {
            return null;
        }
        result = result[key];
    }
    return result;
}