// count rate of item in a array
function countRate(array) {
  const size = array.length;
  const count = array.reduce(
    (acc, cur) => {
      if (cur > 0) {
        acc[0] += 1;
      } else if (cur < 0) {
        acc[1] += 1;
      } else {
        acc[2] += 1;
      }
      return acc;
    },
    { 0: 0, 1: 0, 2: 0 }
  );
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
  const [hours, minutes, seconds] = s.slice(0, -2).split(":");
  const isPm = s.slice(-2) === "PM";
  const newHour = isPm ? (hours % 12) + 12 : hours % 12;
  return `${newHour}:${minutes}:${seconds}`;
}
// timeConversion('12:05:45AM');

function breakingRecords(scores) {
  const scoreBreak = scores.reduce(
    (acc, cur) => {
      if (cur < acc[0]) {
        acc[0] = cur;
        acc[2] += 1;
      }
      if (cur > acc[1]) {
        acc[1] = cur;
        acc[3] += 1;
      }
      return acc;
    },
    [scores[0], scores[0], 0, 0]
  );
  return [scoreBreak[3], scoreBreak[2]];
}

function processDataII(input) {
  const [n, m, ...arr] = input.split(";");
  const textS = arr[0]
    .split(/(?=[A-Z])/)
    .join(" ")
    .toLowerCase();
  const textC = arr[0].split(" ");
  let combined = "";

  const capitalLetter = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  const item = n + m;
  const func = {
    SM: () => {
      console.log(textS.slice(0, -2));
    },
    SC: () => {
      console.log(textS);
    },
    SV: () => {
      console.log(textS);
    },
    CV: () => {
      let [text, ...rest] = textC;
      rest.forEach((element) => {
        text = text.trim() + capitalLetter(element);
      });
      console.log(text);
    },
    CC: () => {
      textC.forEach((element) => {
        combined = combined + capitalLetter(element);
      });
      console.log(combined);
    },
    CM: () => {
      let [text, ...rest] = textC;
      rest.forEach((element) => {
        text = text + capitalLetter(element);
      });
      console.log(`${text}()`);
    },
  };
  func[item]();
}

function processOrderList(orderList, orderId, state) {
  if (state === "Processing") {
    const objet = orderList.find((order) => order.id === orderId);
    objet.state = state;
    return [...orderList, objet];
  }
  if (state === "Delivered") {
    const index = orderList.findIndex((order) => order.id === orderId);
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
  queries.forEach((text) => {
    let count = 0;
    strings.forEach((word) => {
      if (text === word) {
        count++;
      }
    });
    result.push(count);
  });
  return result;
}

// console.log(matchingStrings(['ab', 'ab', 'abc'], ['ab', 'abc', 'bc']))
function findMedian(arr) {
  const sorted = arr.sort((a, b) => a - b);
  // console.log(sorted);
  const middle = Math.floor(sorted.length / 2);
  // console.log(middle);
  console.log((sorted[middle - 1] + sorted[middle]) / 2);
  return sorted.length % 2
    ? sorted[middle]
    : (sorted[middle - 1] + sorted[middle]) / 2;
}

// console.log(findMedian([0, 1, 2, 4, 6, 5]))

function lonelyinteger(a) {
  const result = a.reduce((acc, curr) => {
    if (acc[curr]) {
      acc[curr] += 1;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});
  return Object.keys(result).find((key) => result[key] === 1);
}

// console.log(lonelyinteger([1, 2, 3, 4, 1, 2, 3]))

// Week 2
function gradingStudents(grades) {
  if (grades < 38) return grades;
  const nextMultiple = 5 - (grades % 5);
  const isUpRounding = nextMultiple < 3 ? grades + nextMultiple : grades;
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
  let left = 0,
    right = 0;
  for (let i = 0; i < arr.length; i++) {
    left += arr[i][i];
    right += arr[i][arr.length - 1];
  }
  return Math.abs(left - right);
}

// let left = 0;
//     let right = 0;
//     for (let i = 0; i < arr.length; i++) {
//         left += arr[i][i];
//         right += arr[i][arr.length - 1 - i];
//     }
//     return Math.abs(left - right);

function countingSort(arr) {
  const arrResult = new Array(100).fill(0);
  arr.forEach((ele) => {
    arrResult[ele] += 1;
  });
  return arrResult;
}
// console.log(countingSort([63, 25, 73, 1, 98, 73, 56, 84, 86, 57, 16, 83, 8, 25, 81, 56, 9, 53, 98, 67, 99, 12, 83, 89, 80, 91, 39, 86, 76, 85, 74, 39, 25, 90, 59, 10, 94, 32, 44, 3, 89, 30, 27, 79, 46, 96, 27, 32, 18, 21, 92, 69, 81, 40, 40, 34, 68, 78, 24, 87, 42, 69, 23, 41, 78, 22, 6, 90, 99, 89, 50, 30, 20, 1, 43, 3, 70, 95, 33, 46, 44, 9, 69, 48, 33, 60, 65, 16, 82, 67, 61, 32, 21, 79, 75, 75, 13, 87, 70, 33]))

function countingValleys(steps, path) {
  const result = path.split("").reduce(
    (acc, step) => {
      if (step === "D") {
        acc["s"] += 1;
        if (acc["s"] > 0 && acc["s"] < 2) {
          acc.v += 1;
        }
      } else {
        acc["s"] -= 1;
      }
      return acc;
    },
    { s: 0, v: 0 }
  );
  return result["v"];
}

// console.log(countingValleys(8, 'DDUUDDUDUUUD'))
function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const result = alphabet.split("").reduce((acc, char) => {
    if (s.toLowerCase().includes(char)) {
      acc += 1;
    }
    return acc;
  }, 0);
  return result === 26 ? "pangram" : "not pangram";
}
// console.log(pangrams('We promptly judged antique ivory buckles for the nextt prize'))

function marsExploration(s) {
  const sos = "SOS";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== sos[i % 3]) {
      count += 1;
    }
  }
  return count;
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
      console.log(
        "initial",
        initial,
        "second",
        second,
        "third",
        third,
        "fourth",
        fourth
      );
      const max = Math.max(initial, second, third, fourth);
      console.log("max", max);
      sum += max;
      console.log("sum", sum);
      sum += Math.max(initial, second, third, fourth);
    }
  }
  return sum;
}
const matrix = [
  [112, 42, 83, 119],
  [56, 125, 56, 49],
  [15, 78, 101, 43],
  [62, 98, 114, 108],
];
// console.log(flippingMatrix(matrix))

function twoArrays(k, A, B) {
  const sortedA = A.sort((a, b) => a - b);
  const sortedB = B.sort((a, b) => b - a);
  for (let i = 0; i < sortedA.length; i++) {
    if (sortedA[i] + sortedB[i] < k) {
      return "NO";
    }
  }
  return "YES";
}

function birthday(s, d, m) {
  let count = 0;
  let i = 0;
  while (i <= s.length - 1) {
    let tem = s.slice(i, m + i);
    console.log(tem);
    let count2 = 0;
    tem.forEach((item) => {
      count2 += item;
    });
    if (count2 === d) {
      count += 1;
    }
    i++;
  }
  return count;
}

// console.log(birthday([1, 2, 1, 3, 2], 3, 2))

function sockMerchant(n, ar) {
  let result = 0;
  ar.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
      if (acc[curr] % 2 === 0) {
        result += 1;
      }
    }
    return acc;
  }, {});
  return result;
}

// console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))

function migratoryBirds(arr) {
  const result = arr.reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});
  const max = Math.max(...Object.values(result));
  const arrMax = Object.entries(result).filter((item) => item[1] === max);
  return arrMax[0][0];
}
// console.log(migratoryBirds([1 ,2 ,3 ,4 ,5 ,4 ,3, 2 ,1 ,3 ,4]))

function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => a - b);
  for (let i = sticks.length - 1; i >= 2; i--) {
    if (sticks[i] < sticks[i - 1] + sticks[i - 2]) {
      return [sticks[i - 2], sticks[i - 1], sticks[i]];
    }
  }
  return [-1];
}
function maximumPerimeterTriangle(sticks) {
  sticks.sort((a, b) => b - a);
  let i = 0;
  console.log(sticks);
  while (i < sticks.length - 2) {
    const [f, s, t] = sticks.slice(i, i + 3);
    const isTriangle = f < s + t;
    if (isTriangle) {
      return [t, s, f];
    }
    i++;
  }
  return [-1];
}

// console.log(maximumPerimeterTriangle([1, 2, 3]))

function pageCount(n, p) {
  const fromFront = Math.floor(p / 2);
  const fromBack = Math.floor(n / 2) - fromFront;
  return Math.min(fromFront, fromBack);
}

// console.log(pageCount(5, 4))

function getTotalX(a, b) {
  let count = 0;
  for (let i = 1; i <= 100; i++) {
    if (
      a.every((item) => i % item === 0) &&
      b.every((item) => item % i === 0)
    ) {
      count += 1;
    }
  }
  return count;
}

// console.log(getTotalX([2, 4], [16, 32, 96]))

function pickingNumbers(a) {
  console.time("start");
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    const count = a.filter((item) => item === a[i] || item === a[i] + 1).length;
    max = Math.max(max, count);
  }
  console.timeEnd("start");
  return max;
}

// console.log("copy", pickingNumbers([1, 2, 2, 3, 1, 2]))

function rotateLeft(d, arr) {
  const subA = arr.splice(0, d);
  return [...arr, ...subA];
}

// console.log(rotateLeft(2, [1, 2, 3, 4, 5]))

function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) while ((x1 += v1) < (x2 += v2)) { }
  return x1 === x2 ? "YES" : "NO";
}

// console.log(kangaroo(0, 2, 5, 3))

function beatifulNumberString(s) {
  let result = "NO";
  for (let i = 1; i <= s.length / 2; i++) {
    let num = s.slice(0, i);
    let num2 = s.slice(i, i * 2);
    if (num2 - num === 1) {
      result = "YES";
    }
  }
  return result;
}

// console.log(separateNumbers('123450'))

const plusMinus = (arr) => {
  const result = arr.reduce(
    (acc, curr) => {
      if (curr > 0) {
        acc.positive += 1;
      } else if (curr < 0) {
        acc.negative += 1;
      } else {
        acc.zero += 1;
      }
      return acc;
    },
    { positive: 0, negative: 0, zero: 0 }
  );

  console.log((result.positive / arr.length).toFixed(6));
  console.log((result.negative / arr.length).toFixed(6));
  console.log((result.zero / arr.length).toFixed(6));
};

// console.log(plusMinus([1,1,,0,-1,-1]))

const miniMaxSum = (arr) => {
  const order = arr.sort();
  let min = 0;
  let max = 0;

  for (let i = 0; i < 4; i++) {
    min += order[i];
    max += order[4 - i];
  }

  return `${min} ${max}`;
};

// console.log(separateNumbers('123450'))

// console.log(orderByInsertion([4, 1, 3, -2]))

function towerBreakers(n, m) {
  return m === 1 || n % 2 === 0 ? 2 : 1;
}

function minimumAbsoluteDifference(arr) {
  let min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      const abs = Math.abs(arr[i] - arr[j])
      if (abs < min) {
        min = abs
      }
    }
  }
  return min
}

function orderByInsertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    const curr = arr[i]
    let j = i;
    for (; j > 0 && curr < arr[j - 1]; j--) {
      arr[j] = arr[j - 1]
    }
    arr[j] = curr
  }
  return arr
}


function compareTriplets(a, b) {
  const rank = a.reduce((acc, curr, idx) => {
    if (curr > b[idx]) {
      acc[0] += 1
    } else if (curr < b[idx]) {
      acc[1] += 1
    }
    return acc
  }, [0, 0])
  return rank
}

// console.log(compareTriplets([17, 28, 30], [99, 16, 8]))

function miniMaxSum2(arr) {
  const sortList = arr.sort((a, b) => a - b)
  const min = sortList.slice(0, 4).reduce((acc, curr) => acc += curr, 0)
  const max = sortList.slice(-4).reduce((acc, curr) => acc += curr, 0)
  console.log(`${min} ${max}`)
}

// console.log(miniMaxSum2([1, 4, 2, 5, 3]))

// 100000
function birthdayCakeCandles2(candles) {
  const re = candles.reduce((acc, curr) => {
    if (!acc[curr]) {
      acc[curr] = 0
    }
    acc[curr] += 1
    return acc
  }, {})
  return Math.max(...Object.values(re))
}

// console.log(birthdayCakeCandles2([3, 2, 1, 3]))

function timeConversion2(s) {
  const ampm = s.slice(0, -2).split(':')
  const isPM = s.slice(-2) === 'PM'
  ampm[0] = isPM ? ((+ampm[0] % 12) + 12).toString().padStart(2, '0') : (+ampm[0] % 12).toString().padStart(2, '0')
  return ampm.join(':')
}


// console.log(timeConversion2('12:45:54PM'))
function gradingStudents(grades) {
  const isFail = grades < 40
  const rst = grades
}

function tribonacci(signature, n) {
  if (n === 0) {
    return 0
  } else if (n < 3) {
    return signature.splice(0, n)
  }
  const result = signature.slice()
  for (let i = 3; i < n; i++) {
    result[i] = (result[i - 1] + result[i - 2] + result[i - 3])
  }
  return result
}

// console.log(tribonacci([0, 0, 1], 9))

function existeSuma(lista, suma) {
  if (lista.length == 0)
    return false;
  if (lista.includes(suma))
    return true;
  let ultimo = lista.pop();
  if (suma > ultimo)
    return existeSuma(lista, suma - ultimo)
  else
    return existeSuma(lista, suma)
}
numeros = [1, 1, 5, 4];
suma = 3;
// console.table(numeros);
// console.log(suma);
// console.log(existeSuma(numeros, suma));

function caesarCipher2(s, k) {
  const origiAlpha = 'abcdefghijklmnopqrstuvwxyz';
  const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = []
  for (let j = 0; j < s.length; j++) {
    if (origiAlpha.indexOf(s[j]) != -1) {
      console.log((origiAlpha.indexOf(s[j]) + k))
      result.push(origiAlpha[(origiAlpha.indexOf(s[j]) + k) % origiAlpha.length])
    } else if (upperAlpha.indexOf(s[j]) != -1) {
      result.push(upperAlpha[(upperAlpha.indexOf(s[j]) + k) % upperAlpha.length])
    } else {
      result.push(s[j])
    }
  }
  return result.join('')
}

// console.log(caesarCipher2('middle-Outz', 2),)

function anagram(s) {
  if (s.length % 2 !== 0) {
    return -1
  }
  const mid = s.length / 2
  const first = s.slice(0, mid)
  const second = s.slice(mid)
  // console.log(first, second)
  let result = 0
  for (let i = 0; i < mid; i++) {
    if (second.indexOf(first[i]) === -1) {
      result += 1
    } else {
      second[i] = 0
    }
  }
  return result
}
0
// console.log(anagram('abccde'))*

function maxMin(k, arr) {
  const sortArr = arr.sort((a, b) => a - b)
  let min = Infinity
  for (let i = 0; i < sortArr.length - k + 1; i++) {
    const unForable = sortArr[i + k - 1] - sortArr[i]
    if (unForable < min) { min = unForable }
  }
  return min
}

// console.log(maxMin(2, [1, 2, 1, 2, 1]))

// 1335
function minimumNumber(n, password) {
  const length = password.length
  const len = length >= 6 ? 0 : 6 - length
  const digit = password.match(/^(?=.*\d)/) ? 0 : 1
  const lowcase = password.match(/^(?=.*[a-z])/) ? 0 : 1
  const uppercase = password.match(/^(?=.*[A-Z])/) ? 0 : 1
  const especial = password.match(/^(?=.*[!@#$%^&*()\-+])/) ? 0 : 1
  const total = digit + lowcase + uppercase + especial
  return total <= len ? len : total
}

// console.log(minimumNumber(0, 'AUzs-nV'))*

//     /^(?=.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-+])/
// Note that the backslash (\) is used to escape the special characters in the regular expression,
//  such as the hyphen (-) and plus (+) signs. This is necessary because these 
// characters have special meanings in regular expressions, and must be escaped to match them literally.

// Has a minimum length of 8 characters (the .{8,} part)
// Contains at least one digit (the \d part)
// Contains at least one lowercase English character (the [a-z] part)
// Contains at least one uppercase English character (the [A-Z] part)
// Contains at least one of the specified special characters (the [!@#$%^&*()-+] part)


/////////////// ignore above this line ////////////////////
function multiple(n, divisor) {
  const three = ((BigInt(n) - 1n) / divisor)
  return (divisor * three * (three + 1n)) / 2n
}
function sumTo(n) {
  return n * (n + 1) / 2;
}

// console.log(`${multiple(10, 3n) + multiple(10, 5n) - multiple(10, 15n)}`)

// def sum_of_multiples(n):
//   # calculate the sum of the multiples of 3
//   sum_3 = 3 * (n // 3) * (1 + (n // 3)) // 2

//   # calculate the sum of the multiples of 5
//   sum_5 = 5 * (n // 5) * (1 + (n // 5)) // 2

//   # calculate the sum of the multiples of 15
//   sum_15 = 15 * (n // 15) * (1 + (n // 15)) // 2

//   # return the sum of the multiples of 3, 5, and 15
//   return sum_3 + sum_5 - sum_15

// # test the function
// print(sum_of_multiples(10))  

function fibonacci(N) {

  let first = 1n;
  let second = 2n;
  let sum = 0n;
  while (second <= N) {
    if (second % 2n === 0n) {
      sum += second;
    }
    [first, second] = [second, first + second];

  }
  console.log(`${sum}`)
}

// fibonacci(100)

function sansaXor(arr) {
  if (arr.length % 2 === 0)
    return 0
  let xnum = 0;
  for (let i = 0; i < arr.length; i += 2) {
    xnum = xnum ^ arr[i]
  }
  return xnum
}

// console.log("final", sansaXor([1,2,3]))

// ------------------------------------------
function bruteForce(original, allSub = [], currentSub = [], start = 0) {
  // console.log(start)
  // for (let position = start; position < original.length; position++) {
  //   currentSub.push(original[position]);
  //   allSub.push([...currentSub]);
  //   bruteForce(original, allSub, currentSub, position + 1);
  //   currentSub.pop();
  // }
  // return allSub
}


function PowerSet(originalSet, subSet = [], currentSet = [], start = 0) {
  for (let position = start; position < originalSet.length; position++) {
    console.log(position)
    currentSet.push(originalSet[position])
    subSet.push([...currentSet])
    PowerSet(originalSet, subSet, currentSet, position + 1)
    console.log("otra", position)
    currentSet.pop()
  }
  return subSet
}

function powerSet(originalSet) {
  let subsets = [[]];
  for (let item of originalSet) {
    let length = subsets.length
    for (let i = 0; i < length; i++) {
      subsets.push(subsets[i].concat(item));
    }
  }
  return subsets;
}

// console.log(powerSet([1, 2, 3]))

function fibonacciModified(t1, t2, n) {
  // Write your code here
  let i = 2;
  let nu = t1 + (t2 * t2)
  let res = [].push(nu)
  while (i < n) {
    nu.push()
    i++
  }
  return nu
}
// console.log(fibonacciModified(0, 1, 6))

function countDivisibleBy3(start, end) {
  // Find the first number in the range that is divisible by 3
  while (start % 3 !== 0) {
    start++;
  }

  // Find the last number in the range that is divisible by 3
  while (end % 3 !== 0) {
    end--;
  }

  // Use the formula for the sum of an arithmetic series to find the number of integers divisible by 3
  let n = (end - start) / 3 + 1;
  return n;
}
// console.log(countDivisibleBy3(10, 20))


function balancedSums(arr) {
  let arrayLeft = arr.slice(0, arr.length / 2)
  let arrRight = arr.slice(arr.length / 2, arr.length)
  let last = 0
  // while (arr.length > 1) {
  //   if (left < right) {
  //     left = left + arr.shift()
  //   }
  //   if (left > right) {
  //     right = right + arr.pop()
  //   }
  //   if (arr.length != 1) last = arr.shift()
  // }
  return { left, right }
}
console.log(balancedSums([11, 6, 8, 11]))