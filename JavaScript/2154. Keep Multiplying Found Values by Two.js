/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    nums.sort((a, b) => a - b)
    for (let a of nums) {
        if (a === original) {
            original = original * 2
        }
    }
    return original
};