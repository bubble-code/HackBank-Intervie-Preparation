// Sherlock and Array
function balancedSums(arr) {
    let sum = arr.reduce((a, c) => a += c, 0)
    let left = 0

    for (let item of arr) {
        sum -= item
        if (left === sum) {
            return "YES"
        }
        left += item
    }

    return "NO"
}

// console.log(balancedSums([1, 2, 3]))

// Misère Nim
function misereNim(s) {
    if(s.length ===1){
        return ''
    }
    const result = s.reduce((a, c) => a ^ c - 1, 0)
    console.log(result)

    return result === 0 || result % 2 === 0 ? 'First' : 'Second'

}

console.log(misereNim([96, 5, 6, 4, 2, 10, 10, 6, 5, 1, 8, 1, 10, 8, 2, 3, 7, 6, 5, 4, 2, 7, 2, 7, 4, 6, 2, 9, 8, 8, 1, 5, 3, 9, 8, 6, 8, 9, 3, 4, 10, 1, 4, 9, 8, 5, 4, 4, 10, 8, 10]))
