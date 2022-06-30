/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
    while (nums.length > 1) {
        let tmp = []
        for(let i = 1; i < nums.length; i++) {
            tmp.push((nums[i] + nums[i - 1]) % 10)
        }
        nums = tmp
    }
    return nums[0]
};