/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let counter = 0
    arr.sort((a, b) => b - a)
    let a = arr[0]
    for (let b of arr) {
        if (a === b) {
            counter++
        } else {
            if (counter === a) {
                return a
            }
            a = b
            counter = 1
        }
    }
    if (counter === a) {
        return a
    }
    return -1
};