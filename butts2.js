let test = { ugml: 251, padx: 243, fwft: 243 }

function checkIfEqual(obj) {
  let arr = []
  for (const property in obj) {
    arr.push(obj[property])
  }
  console.log(arr)
  return arr.every((weight) => arr[0] === weight)
}

console.log(checkIfEqual(test))
