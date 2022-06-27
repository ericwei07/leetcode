/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let result = []
    let counter = 0
    while (n >= 0) {
        let tmp = n.toString(2)
        for (let a of tmp) {
            counter += +a
        }
        result.unshift(counter)
        counter = 0
        n--
    }
    return result
};