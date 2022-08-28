const input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split(/\r?\n/)

let passCount = 0
input.forEach((passphrase) => {
  let sortedChunkedPhrase = passphrase.split(" ").map((chunk) => {
    return chunk.split("").sort().join("")
  })
  console.log(sortedChunkedPhrase)
  let setChunkedPhrase = new Set(sortedChunkedPhrase)
  if (sortedChunkedPhrase.length === setChunkedPhrase.size) {
    passCount++
  }
})

console.log(passCount)
