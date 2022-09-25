const input = require("fs")
  .readFileSync("day07_input.txt")
  .toString()
  .split(/\r?\n/)

let tower = {}

input.forEach((line) => {
  let lineArray = line.split(" ")
  //console.log(lineArray)
  let program = {
    holding: [],
    heldBy: "",
    weight: parseInt(lineArray[1].replace(/\(|\)/g, "")),
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

//add cummulative weights to each node
for (const program in tower) {
  let newWeight = tower[program].weight
  let descendents = getDescendents(program, tower)
  descendents.forEach((descendent) => {
    newWeight += tower[descendent].weight
  })
  tower[program].cumWeight = newWeight
}

//start with trunk, check it's childrens weights, if a discpreancy exists continue to check that child's children until there is no discrepancy.
let currentNode
for (const program in tower) {
  //console.log(program)
  //console.log(tower[program])
  if (tower[program].holding.length > 0 && tower[program].heldBy.length === 0) {
    currentNode = program
  }
}
let discrepancy = true
let previousNeighbors
while (discrepancy) {
  //console.log("while loop top")
  //console.log({ currentNode })
  let children = getChildren(currentNode, tower)
  //console.log({ children })
  let childrenCumWeights = children.map((child) => {
    return tower[child].cumWeight
  })
  //console.log({ childrenCumWeights })
  let discrepantIndex = returnIndexOfOutlier(childrenCumWeights)
  //console.log({ discrepantIndex })
  if (discrepantIndex === undefined) {
    discrepancy = false
    console.log(
      `the discrepant node is ${currentNode}, it's individual weight is ${
        tower[currentNode].weight
      } and its neighbors weights are ${previousNeighbors}, it's weight should be ${
        tower[currentNode].weight + differenceOfOutlier(previousNeighbors)
      }`
    )
  }
  previousNeighbors = childrenCumWeights
  currentNode = children[discrepantIndex]
}

//-------FUNCTIONS FOR RUNTIME
function getDescendents(program, tower) {
  // get children of initial tower and place in queue
  let queue = getChildren(program, tower)
  let descendents = []
  // check if any of the children have children, if they do, add to queue them to the queue
  while (queue.length > 0) {
    if (getChildren(queue[0], tower)) {
      let children = getChildren(queue[0], tower)
      children.forEach((child) => {
        queue.push(child)
      })
    }
    let checkedChild = queue.shift()
    descendents.push(checkedChild)
  }
  return descendents
}

function getChildren(program, tower) {
  return [...tower[program].holding]
}

function checkIfEqual(obj) {
  let arr = []
  for (const property in obj) {
    arr.push(obj[property])
  }
  return arr.every((weight) => arr[0] === weight)
}
function getInequalValue(obj) {
  let indexedObj = Object.keys(obj)
  let arr = []
  for (const property in obj) {
    arr.push(obj[property])
  }
  let differentIndex = returnIndexOfOutlier(arr)
  return indexedObj[differentIndex]
}

function returnIndexOfOutlier(arr) {
  for (let i = 0; i < arr.length; i++) {
    let diffCount = 0
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] !== arr[j]) {
        diffCount++
      }
    }
    if (diffCount > 1) {
      return i
    }
  }
}

function differenceOfOutlier(arr) {
  let outlierIndex = returnIndexOfOutlier(arr)
  if (arr[outlierIndex + 1]) {
    return arr[outlierIndex + 1] - arr[outlierIndex]
  } else {
    return arr[outlierIndex - 1] - arr[outlierIndex]
  }
}
