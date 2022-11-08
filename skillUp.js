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

console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))


