// creating functions that allows us to turn a string compartor into and evaluative comparison statement, returns t/f
let countRegisterCreation = 0
const executeComparator = {
  ">": function (x, y) {
    return x > y
  },
  ">=": function (x, y) {
    return x >= y
  },
  "<": function (x, y) {
    return x < y
  },
  "<=": function (x, y) {
    return x <= y
  },
  "==": function (x, y) {
    return x === y
  },
  "!=": function (x, y) {
    return x != y
  },
}
//parsing the input given by the puzzle into an array with an item for each line
const input = require("fs")
  .readFileSync("day08_input.txt")
  .toString()
  .split(/\r?\n/)
//mapping our instructions into an array of objects, with properties that will allow us to execute the instructions.
const instructions = input.map((line) => {
  let splitLine = line.split(" ")
  return {
    register: splitLine[0],
    operator: splitLine[1],
    delta: parseInt(splitLine[2]),
    conditionRegister: splitLine[4],
    conditionCompartor: splitLine[5],
    conditionComparee: parseInt(splitLine[6]),
  }
})
console.log(instructions.length)
//console.log(instructions)
// creating an empty object to track registers
let registers = {}
//going through each instruction line and executing
for (const line of instructions) {
  console.log(line)
  //check if condition is true
  let conditionRegisterValue = returnRegisterValue(
    line.conditionRegister,
    registers
  )
  let conditionMet = executeComparator[line.conditionCompartor](
    conditionRegisterValue,
    line.conditionComparee
  )
  if (conditionMet) {
    let registerValue = returnRegisterValue(line.register, registers)
    registers[line.register] = registerValue + line.delta
    console.log(`executing ${line.register} ${line.operator} ${line.delta}`)
  }
}
let valuesOfRegisters = []
for (const register in registers) {
  valuesOfRegisters.push(registers[register])
}
valuesOfRegisters.sort((a, b) => b - a)
console.log({ registers })
//console.log({ valuesOfRegisters })

console.log(`the answer is ${valuesOfRegisters[0]}`)
function returnRegisterValue(regName, registersObj) {
  if (registersObj.hasOwnProperty(regName)) {
    console.log(
      `${regName} register exists, it's value is ${registersObj[regName]}`
    )
  } else {
    registersObj[regName] = 0
    console.log(`register does not exist, creating register ${regName}`)
    countRegisterCreation++
    console.log({ registers })
  }
  return registersObj[regName]
}

console.log(countRegisterCreation, valuesOfRegisters.length)
