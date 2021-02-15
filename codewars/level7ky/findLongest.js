function findLongest1(array) {
  return array.sort((num1, num2) => `${num2}`.length - `${num1}`.length)[0];
}

function findLongest2(array) {
  return array.reduce((num1, num2) =>
    `${num2}`.length > `${num1}`.length ? num2 : num1
  );
}

console.log(findLongest1([1, 10, 100]));
console.log(findLongest2([1, 10, 100]));
