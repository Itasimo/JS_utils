/**
 * 
 * #### RC4
 * 
 * RC4 is a stream cipher. It encrypts data by XORing it with a pseudo-random stream of bytes, **is not considered secure for SSL/TLS**.
 * [See more](https://en.wikipedia.org/wiki/RC4)
 * 
 * @param {String} key Key to encrypt with
 * @param {String} str String to encrypt
 * @returns {String} Encrypted string
 * 
 */

module.exports = function rc4(key, str) {
    var s = [], j = 0, x, res = '';
    for (var i = 0; i < 256; i++) {
        s[i] = i;
    }
    for (i = 0; i < 256; i++) {
        j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
    }
    i = 0;
    j = 0;
    for (var y = 0; y < str.length; y++) {
        i = (i + 1) % 256;
        j = (j + s[i]) % 256;
        x = s[i];
        s[i] = s[j];
        s[j] = x;
        res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
    }
    return res;
}