const input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split(/\r?\n/)
let passCount = 0
input.forEach((passphrase) => {
  let chunkedPhrase = passphrase.split(" ")
  let setChunkedPhrase = new Set(chunkedPhrase)
  //console.log({ chunkedPhrase }, { setChunkedPhrase })
  if (chunkedPhrase.length === setChunkedPhrase.size) {
    passCount++
  }
})

console.log(passCount)
