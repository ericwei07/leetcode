/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    for (let i in arr) {
        if (arr[i] < arr[i - 1]) {
            return i-1
        }
    }
};