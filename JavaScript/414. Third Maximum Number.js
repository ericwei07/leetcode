/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a, b) => b - a)
    if (nums.length < 3) {
        return nums[0]
    }
    let i = 0
    let prev = nums[0] + 1
    let tmp = 3
    while (i < nums.length) {
        if (nums[i] < prev) {
            prev = nums[i]
            tmp--
        }
        if (tmp === 0) {
            break
        }
        i++
    }
    if (tmp === 0) {
        return prev
    }
    return nums[0]
};