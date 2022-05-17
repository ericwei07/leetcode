/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(_ => _.split('').reverse().join('')).join(' ')
};