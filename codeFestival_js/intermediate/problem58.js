function comma(number) {
  const numbers = number.toString().split('').reverse();
  return numbers
    .map((currentNumber, index) =>
      (index + 1) % 3 === 0 && index !== numbers.length - 1 ? `,${currentNumber}` : currentNumber
    )
    .reverse()
    .join('');
}

function comma2(number) {
  return number.toLocaleString();
}

function comma3(number) {
  const numbers = number.toString();
  if (numbers.length <= 3) {
    return number;
  }

  return `${comma3(numbers.slice(0, numbers.length - 3))},${comma3(
    numbers.slice(numbers.length - 3, numbers.length)
  )}`;
}

console.log(comma(12345678));
console.log(comma2(12345678));
console.log(comma3(12345678));
