/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true
    }
    return Number.isInteger(Math.log2(n))
};