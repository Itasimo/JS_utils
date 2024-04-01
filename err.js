module.exports = function err(...args) {

    let res = '';

    for (let arg of args) {
        res += arg + ' ';
    }
    
    res = res.trim();
    console.error('%c' + res, 'color: #c5433e;');
}