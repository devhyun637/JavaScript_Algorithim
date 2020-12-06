const candies = (string) => {
  const scores = string
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  const answer = [];
  let totalCount = 0;

  while (scores.length > 0 && answer.length < 3) {
    const score = scores.pop();
    if (!answer.includes(score)) {
      answer.push(score);
    }
    totalCount++;
  }

  return totalCount;
};

console.log(candies('1 2 3 4'));
