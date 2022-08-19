const input = require("fs")
  .readFileSync("day04_input.txt")
  .toString()
  .split(/\r?\n/)

let passCount = 0
input.forEach((passphrase) => {
  let chunkedPhrase = passphrase.split(" ")
  chunkedPhrase.map((word, index) => {
    for (let i = 0; i < chunkedPhrase.length; i++) {
      if (i === index) {
        // do not compare with itself
      } else {
        if (isAnagram(word, chunkedPhrase[i])) {
          return false
          break
        }
      }
    }
  })
})

console.log(passCount)
function isAnagram(str1, str2) {
  let arr1 = str1.split("").sort()
  let arr2 = str2.split("").sort()
  if (arr1.join("") === arr2.join("")) {
    return true
  } else {
    return false
  }
}
