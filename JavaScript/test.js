strs = ["cba","daf","ghi"]
result = 0
for (let a of strs) {
    if (a === a.split('').sort().join('') || a === a.split('').sort().reverse().join('')){
        result++
    }
}
console.log(result)

//|| a === a.split('').sort((x, y) => y - x).join(''))