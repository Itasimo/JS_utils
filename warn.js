/**
 * 
 * #### Console error message but with a yellow/orange color
 * 
 * @param  {...any} args Whatever you want to log as an warning
 */
module.exports = function warn(...args) {

    let res = '';

    for (let arg of args) {
        res += arg + ' ';
    }
    
    res = res.trim();
    console.warn('%c' + res, 'color: #d4ad00;');
}