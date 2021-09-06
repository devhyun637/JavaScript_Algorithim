const answer = (string) => {
  const sum = string
    .split(' ')
    .map(Number)
    .reduce((sum, score) => (sum += score), 0);

  return Math.floor(sum / 3);
};

console.log(answer('22 32 42'));
