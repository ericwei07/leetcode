/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] * 2 === arr[j] || arr[i] / 2 === arr[j]) {
                return true
            }
        }
    }
    return false
};