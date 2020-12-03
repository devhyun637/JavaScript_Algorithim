const squareNum = (string) => {
  return Math.pow(parseInt(string.split(' ')[0]), parseInt(string.split(' ')[1]));
};

console.log(squareNum('2 5'));
