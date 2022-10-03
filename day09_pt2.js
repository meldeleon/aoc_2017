const input = require("fs").readFileSync("day09_input.txt").toString()

let test = []
for (let i = 0; i < input.length; i++) {
  test.push(input[i])
}
let state = {
  nestingLevel: 0,
  garbage: false,
  total: 0,
}

//test is primary iterative source
//target is copy of test, that we will mutate

// parse basic nested {}
let target = [...test]
for (let i = 0; i < test.length; i++) {
  //console.log(`char: ${test[i]}`)
  if (state.garbage) {
    switch (test[i]) {
      case ">":
        //console.log("> case triggered")
        state.garbage = false
        break
      case "!":
        i++
        break
      default:
        target.splice(i, 1, "*")
    }
  } else {
    switch (test[i]) {
      case "{":
        state.nestingLevel++
        break
      case "}":
        state.total += state.nestingLevel
        state.nestingLevel--
        break
      case "<":
        state.garbage = true
        break
    }
  }
  //console.log({ state })
}

//now that we have marked target with placeholder removal "!" we will remove it from target
let count = 0
target.forEach((x) => {
  if (x === "*") {
    count++
  } else {
  }
})

console.log(target)
console.log(`The answer is ${count}`)
