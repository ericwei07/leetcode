/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits.reverse()
    let tmp = 0
    digits[0] += 1
    for (let i in digits) {
        digits[i] += tmp
        if (digits[i] > 9) {
            digits[i] = digits[i] % 10
            tmp = 1
        } else {
            tmp = 0
        }
    }
    if (tmp === 1) {
        digits.push(1)
    }
    return digits.reverse()
};