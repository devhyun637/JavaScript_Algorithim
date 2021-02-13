function openOrSenior(data) {
  // return data.map((person) => (person[0] >= 55 && person[1] > 7 ? 'Senior' : 'Open'));
  console.log([1, 2, 3, 4, 5].map((value) => [value]));
  return data.map(([age, handicap]) => (age >= 55 && handicap > 7 ? 'Senior' : 'Open'));
}

const data = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9],
];

console.log(openOrSenior(data));
