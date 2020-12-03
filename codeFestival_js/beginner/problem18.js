const answer = (string) => {
  return (
    string
      .split(' ')
      .map(Number)
      .reduce((value, sum) => value + sum, 0) / 3
  );
};

console.log(answer('20 30 40'));
