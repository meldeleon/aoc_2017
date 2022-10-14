const input = require("fs")
  .readFileSync("day11_input.txt")
  .toString()
  .split(",")
console.log(input)

let state = {
  distance: 0,
  hexCoord: [0, 0],
  maxDistance: 0,
}

for (let i = 0; i < input.length; i++) {
  state.hexCoord = moveDirection(input[i], state.hexCoord)
  state.distance = findDistance(state.hexCoord)
  if (i === 0) {
    state.maxDistance = state.distance
  } else {
    if (state.distance > state.maxDistance) {
      state.maxDistance = state.distance
    }
  }
}
console.log(state)

function moveDirection(direction, hexCoord) {
  let updatedHexCoord = [...hexCoord]
  switch (direction) {
    case "n":
      updatedHexCoord[1] += 2
      break
    case "ne":
      updatedHexCoord[0] += 1
      updatedHexCoord[1] += 1
      break
    case "se":
      updatedHexCoord[0] += 1
      updatedHexCoord[1] -= 1
      break
    case "s":
      updatedHexCoord[1] -= 2
      break
    case "sw":
      updatedHexCoord[0] -= 1
      updatedHexCoord[1] -= 1
      break
    case "nw":
      updatedHexCoord[0] -= 1
      updatedHexCoord[1] += 1
  }
  return updatedHexCoord
}

function findDistance(hexCoord) {
  let absX = Math.abs(hexCoord[0])
  let absY = Math.abs(hexCoord[1])
  if (absX > absY) {
    return absX
  } else {
    return (absX + absY) / 2
  }
}
