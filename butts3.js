let butts = {
  a: 0,
  b: 1,
}

function returnRegisterValue(register, registers) {
  if (registers[register]) {
  } else {
    registers[register] = 0
  }
  return registers[register]
}

returnRegisterValue("c", butts)
console.log(butts)
