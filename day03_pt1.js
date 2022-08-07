let input = require("fs")
  .readFileSync("day03_input.txt")
  .toString()
  .split(/\r?\n/)
console.log(input)

function mapSquares(n) {
  let upperBounds = []
  for (let i = 1; i < n; i += 2) {
    upperBounds.push(i ** 2)
  }
  return upperBounds
}

let squares = mapSquares(1000)
//console.log(squares)

function findLayer(arr, n) {
  //pass arr as list of squares, n is the number for which we are trying to find the layer
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return i
    }
  }
}

function findDistance(n) {
  let layer = findLayer(squares, n)
  let maxLayerValue = squares[layer]
  let diff = maxLayerValue - n + 1
  let
}
