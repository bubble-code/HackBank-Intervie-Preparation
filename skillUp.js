// count rate of item in a array
function countRate(array) {
    const size = array.length;
    const count = array.reduce((acc, cur) => {
        if (cur > 0) {
            acc[0] += 1;
        } else if (cur < 0) {
            acc[1] += 1;
        } else {
            acc[2] += 1;
        }
        return acc;
    }, { 0: 0, 1: 0, 2: 0 });
    Object.values(count).map((value) => {
        console.log((value / size).toFixed(6));
    });
}

// countRate([-4, 3, -9, 0, 4, 1])

function minMaxSum(arr) {
    const ordered = arr.sort((a, b) => a - b);
    const min = ordered.slice(0, 4).reduce((acc, cur) => acc + cur);
    const max = ordered.slice(-4).reduce((acc, cur) => acc + cur);
    console.log(`${min} ${max}`);
}

// minMaxSum([1, 3, 5, 7, 9]);

function timeConversion(s) {
    const [hours, minutes, seconds] = s.slice(0, -2).split(':');
    const isPm = s.slice(-2) === 'PM';
    const newHour = isPm ? (hours % 12) + 12 : hours % 12
    return `${newHour}:${minutes}:${seconds}`
}
// timeConversion('12:05:45AM');

function breakingRecords(scores) {
    const scoreBreak = scores.reduce((acc, cur) => {
        if (cur < acc[0]) {
            acc[0] = cur;
            acc[2] += 1;
        }
        if (cur > acc[1]) {
            acc[1] = cur;
            acc[3] += 1;
        }
        return acc;
    }, [scores[0], scores[0], 0, 0]);
    return [scoreBreak[3], scoreBreak[2]];
}

function processDataII(input) {
    const [n, m, ...arr] = input.split(';');
    const textS = arr[0].split(/(?=[A-Z])/).join(' ').toLowerCase();
    const textC = arr[0].split(' ');
    let combined = '';

    const capitalLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    const item = n + m
    const func = {
        'SM': () => {
            console.log(textS.slice(0, -2));
        },
        'SC': () => {
            console.log(textS);
        },
        'SV': () => {
            console.log(textS);
        },
        'CV': () => {
            let [text, ...rest] = textC;
            rest.forEach(element => {
                text = text.trim() + capitalLetter(element);
            });
            console.log(text);
        },
        'CC': () => {
            textC.forEach(element => {
                combined = combined + capitalLetter(element);
            });
            console.log(combined);
        },
        'CM': () => {
            let [text, ...rest] = textC;
            rest.forEach(element => {
                text = text + capitalLetter(element);
            });
            console.log(`${text}()`);
        },

    }
    func[item]();
}

function processOrderList(orderList, orderId, state) {
    if (state === 'Processing') {
        const objet = orderList.find(order => order.id === orderId);
        objet.state = state;
        return [...orderList, objet];
    }
    if (state === 'Delivered') {
        const index = orderList.findIndex(order => order.id === orderId);
        delete orderList[index];
        return orderList;
    }
}

function divisibleSumPairs(n, k, ar) {
    let count = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((ar[i] + ar[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

function matchingStrings(strings, queries) {
    const result = [];
    queries.forEach(text => {
        let count = 0;
        strings.forEach(word => {
            if (text === word) {
                count++;
            }
        })
        result.push(count);
    })
    return result
}

// console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))
function findMedian(arr) {
    const sorted = arr.sort((a, b) => a - b);
    // console.log(sorted);
    const middle = Math.floor(sorted.length / 2);
    // console.log(middle);
    console.log((sorted[middle - 1] + sorted[middle]) / 2);
    return sorted.length % 2 ? sorted[middle] : (sorted[middle - 1] + sorted[middle]) / 2;
}

// console.log(findMedian([0, 1, 2, 4, 6, 5]))

function lonelyinteger(a) {
    const result = a.reduce((acc, curr) => {
        if (acc[curr]) {
            acc[curr] += 1;
        } else {
            acc[curr] = 1;
        }
        return acc
    }, {})
    return Object.keys(result).find(key => result[key] === 1);
}

// console.log(lonelyinteger([1, 2, 3, 4, 1, 2, 3]))

// Week 2
function gradingStudents(grades) {
    if (grades < 38)
        return grades
    const nextMultiple = 5 - grades % 5
    const isUpRounding = nextMultiple < 3 ? (grades + nextMultiple) : grades
    return isUpRounding;

    // return grades.map(grade => {
    //     if (grade < 38) {
    //         return grade;
    //     }
    //     const nextMultiple = Math.ceil(grade / 5) * 5;
    //     if (nextMultiple - grade < 3) {
    //         return nextMultiple;
    //     }
    //     return grade;
    // })

}
// console.log(gradingStudents(4))

function flippingBits(n) {
    return ~n >>> 0;
}

// console.log(flippingBits(0))

function diagonalDifference(arr) {
    let left = 0, right = 0;
    for (let i = 0; i < arr.length; i++) {
        left += arr[i][i]
        right += arr[i][arr.length - 1]
    }
    return Math.abs(left - right)
}

// let left = 0;
//     let right = 0;
//     for (let i = 0; i < arr.length; i++) {
//         left += arr[i][i];
//         right += arr[i][arr.length - 1 - i];
//     }
//     return Math.abs(left - right);

function countingSort(arr) {
    const arrResult = new Array(100).fill(0)
    arr.forEach(ele => {
        arrResult[ele] += 1
    })
    return arrResult
}
// console.log(countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33]))


function countingValleys(steps, path) {
    const result = path.split('').reduce((acc, step) => {
        if (step === 'D') {
            acc['s'] += 1
            if (acc['s'] > 0 && acc['s'] < 2) {
                acc.v += 1
            }
        } else {
            acc['s'] -= 1
        }
        return acc
    }, { s: 0, v: 0 })
    return result['v']
}

// console.log(countingValleys(8, 'DDUUDDUDUUUD'))
function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'
    const result = alphabet.split('').reduce((acc, char) => {
        if (s.toLowerCase().includes(char)) {
            acc += 1
        }
        return acc
    }, 0)
    return result === 26 ? 'pangram' : 'not pangram'
}
// console.log(pangrams('We promptly judged antique ivory buckles for the nextt prize'))    

function marsExploration(s) {
    const sos = 'SOS'
    let count = 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== sos[i % 3]) {
            count += 1
        }
    }
    return count
}
// console.log(marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'))

function flippingMatrix(matrix) {
    const n = matrix.length / 2;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            const initial = matrix[i][j];
            const second = matrix[i][2 * n - 1 - j];
            const third = matrix[2 * n - 1 - i][j];
            const fourth = matrix[2 * n - 1 - i][2 * n - 1 - j];
            console.log('initial', initial, 'second', second, 'third', third, 'fourth', fourth)
            const max = Math.max(initial, second, third, fourth);
            console.log('max', max)
            sum += max;
            console.log('sum', sum)
            sum += Math.max(initial, second, third, fourth);
        }
    }
    return sum;
}
const matrix = [
    [112, 42, 83, 119],
    [56, 125, 56, 49],
    [15, 78, 101, 43],
    [62, 98, 114, 108]
]
// console.log(flippingMatrix(matrix))