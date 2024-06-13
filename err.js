/**
 * 
 * #### Console error message but with a red color
 * 
 * @param  {...any} args Whatever you want to log as an error
 */
module.exports = function err(...args) {

    let res = '';

    for (let arg of args) {
        res += arg + ' ';
    }
    
    res = res.trim();
    console.error('%c' + res, 'color: #c5433e;');
}