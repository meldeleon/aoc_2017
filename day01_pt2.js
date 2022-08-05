const input = require("fs")
  .readFileSync("day01_input.txt")
  .toString()
  .split(/\r?\n/)

let solutionArr = []
let count
input.forEach((num) => {
  count = 0
  let numArr = num.split("")
  for (let i = 0; i < numArr.length; i++) {
    let halfwayNum = numArr[returnHalwayPt(i, numArr.length)]
    count += checkEqual(numArr[i], halfwayNum)
  }
  solutionArr.push(count)
})

function checkEqual(a, b) {
  if (a === b) {
    return parseInt(a)
  } else {
    return 0
  }
}

function returnHalwayPt(index, arrLength) {
  let diff = parseInt(arrLength) / 2
  return (diff + parseInt(index)) % parseInt(arrLength)
}

console.log(solutionArr)

const name = function (a, b) {
  return `fuck ${a}, says ${b}`
}

function name(a) {
  return `fuck ${a}, says ${b}`
}
