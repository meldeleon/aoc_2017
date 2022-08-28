const input = require("fs").readFileSync("day06_input.txt").toString().split("	")

let memory = input.map((x) => parseInt(x))
let memoryStates = []
let dupeState = false
while (!dupeState) {
  reallocateMemory(memory)
  memoryStates.push(memory.toString())
  dupeState = detectDupeStates(memoryStates)
  console.log({ memory }, { memoryStates })
  console.log(`the answer is: ${memoryStates.length}`)
}

function reallocateMemory(memory) {
  let max = Math.max(...memory)
  //console.log(max)
  let index = returnMaxBankIndex(memory, max)
  //console.log(index)
  for (let i = 0; i <= max; i++) {
    if (i === 0) {
      memory[index] = 0
    } else {
      memory[(index + i) % memory.length]++
    }
  }
}

function detectDupeStates(memoryStates) {
  let setMemoryStates = new Set(memoryStates)
  if (memoryStates.length === setMemoryStates.size) {
    return false
  } else {
    return true
  }
}
function returnMaxBankIndex(memory, max) {
  for (let i = 0; i < memory.length; i++) {
    if (memory[i] === max) {
      return i
    }
  }
}
