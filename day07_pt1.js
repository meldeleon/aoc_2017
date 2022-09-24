const input = require("fs")
  .readFileSync("day07_input.txt")
  .toString()
  .split(/\r?\n/)

//console.log(input)

let tower = {}

//build tower object with "holding" values only
// programName: {
//   holding: []
//   heldBy: []
// }
input.forEach((line) => {
  let lineArray = line.split(" ")
  //console.log(lineArray)
  let program = {
    holding: [],
    heldBy: "",
  }
  if (lineArray.length > 3) {
    for (let i = 3; i < lineArray.length; i++) {
      let heldProgram = lineArray[i].replace(",", "")
      program.holding.push(heldProgram)
    }
  }
  let towerName = lineArray[0]
  tower[towerName] = program
})

//add heldBy to each program in the tower
for (const program in tower) {
  //console.log(program)
  if (tower[program].holding.length > 0) {
    tower[program].holding.forEach((heldProgram) => {
      //console.log(` ${heldProgram} is being updated `)
      tower[heldProgram].heldBy = program
      let test = tower[heldProgram].heldBy
    })
  }
}

let answer
for (const program in tower) {
  if (tower[program].holding.length > 0 && tower[program].heldBy.length === 0) {
    answer = program
  }
}

console.log({ answer })
console.log({ tower })
