let input = require("fs").readFileSync("day10_input.txt").toString().split("")
//console.log(input)
let ending = [17, 31, 73, 47, 23]
let asciiArr = input.map((char) => {
  return char.charCodeAt(0)
})
asciiArr.push(ending)
input = asciiArr.flat()

//create hash
let digitSize = 256
let hash = []
for (let i = 0; i < digitSize; i++) {
  hash.push(i)
}
//console.log(hash)

let state = {
  position: 0,
  skipSize: 0,
}

for (let h = 0; h < 64; h++) {
  for (let i = 0; i < input.length; i++) {
    //console.log({ hash })
    //console.log({ state })
    //storing sequence and indices separately, since we support wrapping
    let sequence = []
    let indices = []
    let startingIndex = state.position % hash.length
    //if the sequence needs to wrap
    if (startingIndex + input[i] > hash.length) {
      let distanceToEnd = hash.length - startingIndex
      for (let j = 0; j < distanceToEnd; j++) {
        indices.push(startingIndex + j)
      }
      let remainder = input[i] - distanceToEnd
      for (let k = 0; k < remainder; k++) {
        indices.push(0 + k)
      }
    }
    //if the sequence doesn't need to wrap
    else {
      for (let m = 0; m < input[i]; m++) {
        indices.push(startingIndex + m)
      }
    }
    //grab sequence based on selected indices
    indices.forEach((i) => {
      sequence.push(hash[i])
    })
    // reverse the sequence
    let newSequence = reverseOrder(sequence)
    //splice in the reversed sequence in proper indices
    for (let l = 0; l < newSequence.length; l++) {
      hash.splice(indices[l], 1, newSequence[l])
    }
    //console.log({ sequence }, { indices })
    state.position += input[i] + state.skipSize
    state.skipSize++
  }
}

//console.log(hash)
//console.log(hash.length)
let denseHash = []
for (let n = 0; n < hash.length / 16; n + 16) {
  let sequence1 = hash.splice(n, 16)
  let denseHashSequence = sequence1.reduce((a, b) => a ^ b)
  denseHash.push(denseHashSequence)
}
// console.log(denseHash)
// console.log(denseHash.length)
let answer = ""

denseHash.forEach((x) => {
  answer = answer.concat(x.toString(16).padStart(2, "0"))
})

console.log(`The answer is ${answer}`)
function reverseOrder(arr) {
  let reversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}
