let input = require("fs")
  .readFileSync("day02_input.txt")
  .toString()
  .split(/\r?\n/)

input = [...input].map((x) => {
  return x.split(/\t/)
})

let solutionArr = []
input.forEach((numberSet) => {
  numberSet.forEach((number, numIndex) => {
    for (let h = 0; h < numberSet.length; h++) {
      if (h === numIndex) {
      } else {
        if (numberSet[h] % number === 0) {
          solutionArr.push(numberSet[h] / number)
        }
      }
    }
  })
})
console.log(solutionArr)

let sum = 0
for (let i = 0; i < solutionArr.length; i++) {
  sum += parseInt(solutionArr[i])
}
console.log(sum)
