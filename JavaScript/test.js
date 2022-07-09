let digits = [1, 2, 3]
digits = digits.reverse()
let tmp = 0
for (let i in digits) {
    digits[i] += 1
    digits[i] += tmp
    if (digits[i] > 9) {
        digits[i] = digits[i] % 10
        tmp = 1
    } else {
        tmp = 0
    }
}
if (tmp === 1) {
    digits.push(1)
}
console.log(digits.reverse())