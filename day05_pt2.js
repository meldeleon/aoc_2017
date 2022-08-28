const input = require("fs")
  .readFileSync("day05_input.txt")
  .toString()
  .split(/\r?\n/)
let maze = input.map((x) => parseInt(x))
//console.log(maze)
let stateIndex = 0
let stepCount = 0
while (stateIndex < maze.length) {
  let instruction = maze[stateIndex]

  if (maze[stateIndex] >= 3) {
    maze[stateIndex]--
  } else {
    maze[stateIndex]++
  }
  stateIndex += instruction
  stepCount++
  //console.log({ maze }, { stateIndex })
}
console.log(stepCount)
