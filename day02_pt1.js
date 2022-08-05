let input = require("fs")
  .readFileSync("day02_input.txt")
  .toString()
  .split(/\r?\n/)

input = [...input].map((x) => {
  return x.split(/\t/)
})

let solutionArr = []
input.forEach((numberSet) => {
  let max = Math.max(...numberSet)
  let min = Math.min(...numberSet)
  solutionArr.push(max - min)
})
console.log(solutionArr)

let sum = 0
for (let i = 0; i < solutionArr.length; i++) {
  sum += parseInt(solutionArr[i])
}
console.log(sum)
