/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function(s, letter) {
    let counter = 0
    for (let a of s) {
        if (a === letter) {
            counter++
        }
    }
    return Math.floor(counter / s.length * 100)
};