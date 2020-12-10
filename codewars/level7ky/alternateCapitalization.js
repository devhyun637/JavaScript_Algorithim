function capitalize(s) {
  return [0, 1].map((value) =>
    [...s]
      .map((character, index) => (index % 2 === value ? character.toUpperCase() : character))
      .join('')
  );
}

function capitalize2(s) {
  const answer = [];
  answer.push(
    s
      .toUpperCase()
      .split('')
      .reduce((str, value, index) =>
        str.concat(index % 2 === 0 ? value.toUpperCase() : value.toLowerCase())
      )
  );
  answer.push(
    s
      .toUpperCase()
      .split('')
      .reduce((str, value, index) =>
        str.concat(index % 2 === 0 ? value.toUpperCase() : value.toLowerCase())
      )
  );
  return answer;
}

console.log(capitalize('abcdef'));
console.log(capitalize2('abcdef'));
