nums = [1,2,2,5,3,5]

nums.sort((a, b) => b - a)
if (nums.length < 3) {
    console.log (nums[0])
}
let i = 0
let prev = nums[0] + 1
let tmp = 3
while (i < nums.length) {
    if (nums[i] < prev) {
        prev = nums[i]
        tmp--
    }
    i++
}
if (tmp === 0) {
    console.log(prev)
}
console.log (nums[0])