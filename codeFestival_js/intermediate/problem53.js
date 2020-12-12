function mathBrackets(bracket) {
  if (bracket.split('(').length !== bracket.split(')').length) {
    return 'NO';
  }

  const checkValue = bracket
    .split('')
    .reduce(
      (checkValueSum, currentCharacter) =>
        currentCharacter === '(' ? checkValueSum + 1 : checkValueSum - 1,
      0
    );

  return checkValue === 0 ? 'YES' : 'NO';
}

console.log(mathBrackets('((()))())'));
console.log(mathBrackets('()())'));
