function problem50(arr) {
  const result = arr.split(' ').map(Number);

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        const tmp = result[j + 1];
        result[j + 1] = result[j];
        result[j] = tmp;
      }
    }
  }
  return result.join(' ');
}

console.log(problem50('10 9 8 7 4 5 11 23 19 128 2000'));
