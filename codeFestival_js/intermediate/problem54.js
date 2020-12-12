function problem54(numbers) {
  const sortNumbers = numbers
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b)
    .join(' ');

  return numbers === sortNumbers ? 'YES' : 'NO';
}

console.log(problem54('1 4 2 6 3'));
