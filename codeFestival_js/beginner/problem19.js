const squareNum = (string) => {
  const [num1, num2] = string.split(' ');
  return Math.pow(parseInt(num1), parseInt(num2));
};

console.log(squareNum('2 5'));
