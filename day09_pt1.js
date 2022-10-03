const input = require("fs").readFileSync("day09_input.txt").toString()

let test = input
let state = {
  nestingLevel: 0,
  garbage: false,
  total: 0,
}

// parse basic nested {}
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

console.log(`The answer is ${state.total}`)
