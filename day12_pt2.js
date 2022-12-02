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
//console.log({ graph })

const groups = {}
// numbered is going to correlate to a "group", we will draw a graph for each group.
let numbered = 0
let stack
const checked = []

for (const node in graph) {
  console.log(`checking ${node}`)
  //check for base case
  if (numbered > 0) {
    // if not the first node check if node is already in identified groups
    for (let i = 0; i <= numbered; i++) {
      if (groups[i] && groups[i].includes(node)) {
        //
      } else {
        stack = [...graph[node]]
        console.log(`adding ${node}:${graph[node]} to stack`)
        groups[numbered] = []
        groups[numbered].push(node)
        console.log({ groups })
      }
    }
  } else {
    //base case
    stack = [...graph[node]]
    groups[numbered] = []
    groups[numbered].push(node)
    console.log({ groups })
  }

  while (stack.length > 0) {
    // check the first item in the stack, if it is already in the answerArr, ignore
    if (!groups[numbered].includes(stack[0])) {
      // if it isn't, then push to answer array
      groups[numbered].push(stack[0])
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
  numbered++
}
