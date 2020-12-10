const candies = (string) => {
  const scores = string
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];
  let totalCount = 0;

  while (scores.length > 0 && answer.length < 4) {
    const score = scores.pop();
    if (!answer.includes(score)) {
      answer.push(score);
    }
    if (answer.length !== 4) {
      totalCount++;
    }
  }

  return totalCount;
};

const candies2 = (string) => {
  const scores = {};
  string
    .split(' ')
    .map(Number)
    .map((score) => (scores[score] ? scores[score]++ : (scores[score] = 1)));

  const studentsCounts = Object.values(scores);
  return studentsCounts.reduce(
    (sum, student, index) => (studentsCounts.length - index <= 3 ? sum + student : sum),
    0
  );
};

console.log(candies('1 1 1 2 2 2 3 3 3 4 4 4'));
console.log(candies2('11 22 33 33 33 44 55 66'));
