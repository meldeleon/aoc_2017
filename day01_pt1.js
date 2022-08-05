const input = require("fs")
  .readFileSync("day01_input.txt")
  .toString()
  .split(/\r?\n/)
const checkEqual = function (a, b) {
  if (a === b) {
    return parseInt(a)
  } else {
    return 0
  }
}

//console.log(input)
let solutionArr = []
let count
input.forEach((num) => {
  count = 0
  let numArr = num.split("")
  numArr.push(numArr[0])
  //console.log(numArr)
  for (let i = 0; i < numArr.length - 1; i++) {
    count += checkEqual(numArr[i], numArr[i + 1])
  }
  solutionArr.push(count)
})

console.table(solutionArr)
