function problem61(string) {
  const stringCount = {};
  string
    .split('')
    .forEach((character) =>
      stringCount[character] ? stringCount[character]++ : (stringCount[character] = 1)
    );

  return Object.keys(stringCount)
    .map((character) => `${character}${stringCount[character]}`)
    .join('');
}

console.log(problem61('aaabbbcccddd'));
