/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let result = 0
    let counter = 0
    while (+num > 0) {
        num += ''
        for (let i = 0; i < num.length; i++) {
            counter += +num[i]
        }
        if (counter % 2 === 0) {
            result++
        }
        num--
        counter = 0
    }
    return result
};