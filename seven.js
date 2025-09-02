//chaining method

const myNumers = [20, 21, 22, 23, 24, 25]

const newNums = myNumers
  .map((num) => num * 2)       // [40, 42, 44, 46, 48, 50]
  .map((num) => num + 1)       // [41, 43, 45, 47, 49, 51]
  .filter((num) => num >= 40)  // [41, 43, 45, 47, 49, 51]

console.log(newNums)


// console.log(newNums);
