function returnRegisterValue(register, registers) {
  if (registers[register]) {
  } else {
    registers[register] = 0
  }
  return registers[register]
}

registers = {
  a: 2,
  b: 1,
}

if (returnRegisterValue("c", registers)) {
  console.log("truthy")
} else {
  console.log("falsy")
}
