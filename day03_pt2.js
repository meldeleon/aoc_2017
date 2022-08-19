const directions = ["E", "N", "W", "S"]

function getNeighbors(coord) {
  let [x, y] = coord
  //find all the neighbors of a coordinate and store it
  let neighbors = []
  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (!(x == i && y == j)) {
        neighbors.push([i, j])
      }
    }
  }
  return neighbors
}

function sumNeighbors(coord, matrix) {
  let [x, y] = coord
  //find all the neighbors of a coordinate and store it
  let neighbors = getNeighbors(coord)
  //iterate over each neighbor, check if it's populated and if it is, sum it.
  let sum = 0
  neighbors.forEach((neighborCoord) => {
    let [a, b] = neighborCoord
    matrix.forEach((matrixObj) => {
      let [c, d] = matrixObj.position
      if (a === c && b === d) {
        sum += matrixObj.value
      }
    })
  })
  return sum
}

function determineNextCoord(coord, matrix, currentDirection) {
  let [x, y] = coord
  let neighbors = getNeighbors(coord)
  let populatedNeighbors = 0
  neighbors.forEach((neighbor) => {
    let [a, b] = neighbor
    for (const matrixObj of matrix) {
      let [c, d] = matrixObj.position
      if (a === c && b === d) {
        populatedNeighbors++
      }
    }
  })
  if (populatedNeighbors <= 2 && populatedNeighbors > 0) {
    currentIndex = directions.indexOf(currentDirection)
    currentDirection = directions[(currentIndex + 1) % 4]
  }
  switch (currentDirection) {
    case "N":
      return [x, y + 1, "N"]
      break
    case "W":
      return [x - 1, y, "W"]
      break
    case "S":
      return [x, y - 1, "S"]
      break
    case "E":
      return [x + 1, y, "E"]
      break
    default:
      console.log(`current direction unknown: ${currentDirection}`)
  }
}

const matrix = [
  {
    position: [0, 0],
    value: 1,
    direction: "E",
  },
]

let nextValue = 1
let i = 0
while (nextValue < 400000) {
  let [x, y, nextDirection] = determineNextCoord(
    matrix[i].position,
    matrix,
    matrix[i].direction
  )
  nextValue = sumNeighbors([x, y], matrix)
  matrix.push({
    position: [x, y],
    value: nextValue,
    direction: nextDirection,
  })
  console.log(matrix[i])
  i++
}
