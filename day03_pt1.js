let input = require("fs")
  .readFileSync("day03_input.txt")
  .toString()
  .split(/\r?\n/)

function mapSquares(n) {
  let upperBounds = []
  for (let i = 1; i < n; i += 2) {
    upperBounds.push(i ** 2)
  }
  return upperBounds
}

let squares = mapSquares(1000)

function findLayer(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= n) {
      return i
    }
  }
}

function mapLayer(arr, n) {
  let layer = findLayer(arr, n)
  let numberOfDigits = layer * 8
  let eigthDigits = numberOfDigits / 8
  let sequence = []
  for (let i = layer; i <= layer + eigthDigits; i++) {
    sequence.push(i)
  }
  for (let j = layer + eigthDigits - 1; j > layer; j--) {
    sequence.push(j)
  }
  let mappedLayer = []
  for (let k = 0; k < 4; k++) {
    mappedLayer.push(sequence)
  }
  return mappedLayer.flat()
}

function findDistance(arr, n) {
  let mappedLayer = mapLayer(arr, n)
  let layer = findLayer(arr, n)
  let layer0IndexNum = Math.pow((layer - 1) * 2 + 1, 2) + layer
  let diff = n - layer0IndexNum
  return mappedLayer[diff]
}
let test = findDistance(squares, 368078)
console.log(test)
