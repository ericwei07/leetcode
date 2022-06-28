/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n === 0) {
        return 0
    }
    let arr = [0, 1]
    while (n > 1) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2])
        n--
    }
    return arr[arr.length - 1]
};