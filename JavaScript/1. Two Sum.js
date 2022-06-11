/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let result = []
    for (let a = 0; a < nums.length - 1; a++) {
        for (let b = a + 1; b < nums.length; b++) {
            if (nums[a] + nums[b] === target){
                result.push(a)
                result.push(b)
            }
        }
    }
    return result
};