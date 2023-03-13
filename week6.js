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

console.log(balancedSums([1, 2, 3]))