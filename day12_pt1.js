const input = require("fs")
  .readFileSync("day12_input.txt")
  .toString()
  .split(/\r?\n/)
const parsedInput = []
//initiate graph
let graph = {}
//parse each input line
for (let i = 0; i < input.length; i++) {
  let arr = input[i].split(" ")
  for (let j = 0; j < arr.length; j++) {
    //ignore the arrows
    if (j === 0) {
      if (graph[arr[j]] === undefined) {
        graph[arr[j]] = []
      }
    } else if (j === 1) {
      // do nothing
    } else {
      arr[j].replace(",", "")
      arr[j] = parseInt(arr[j])
      graph[arr[0]].push(arr[j])
    }
  }
}
console.log({ graph })

const programPrompt = 0
const answerArray = []
const checked = []

let stack = [...graph[programPrompt]]
console.log({ stack })
while (stack.length > 0) {
  // console.log({ stack })
  // console.log({ answerArray })
  // check the first item in the stack, if it is already in the answerArr, ignore
  if (!answerArray.includes(stack[0])) {
    // if it isn't, then push to answer array
    answerArray.push(stack[0])
    // push its children, but ignore if already in stack or if equal to parent
    graph[stack[0]].forEach((x) => {
      if (x !== stack[0] && !stack.includes(x) && !checked.includes(x)) {
        stack.push(x)
      }
      checked.push(x)
    })
  }
  //remove from stack
  stack.shift()
}

console.log(
  `This answer is there are ${answerArray.length} programs connected to program ${programPrompt}`
)
