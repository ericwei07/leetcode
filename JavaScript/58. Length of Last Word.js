/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    s = s.split('').reverse().join('')
    while (s[0] === ' ') {
        s = s.substring(1)
    }
    let result = ''
    for (let letter of s) {
        if (letter !== ' ') {
            result += letter
        } else {
            break
        }
    }
    return result.length
    // return s.split(/\s+/).slice(-1)[0].length
}