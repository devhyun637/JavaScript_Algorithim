function validatePIN(pin) {
  return /^(\d{4}$|\d{6}$)/.test(pin);
}

console.log(validatePIN('1'));
console.log(validatePIN('-1.234'));
console.log(validatePIN('a234'));
console.log(validatePIN('0000'));
