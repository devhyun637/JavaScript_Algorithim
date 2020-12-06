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

console.log(candies('1 1 1 2 2 2 3 3 3 4 4 4'));
