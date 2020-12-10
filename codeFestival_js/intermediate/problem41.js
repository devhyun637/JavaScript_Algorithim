function problem41(number) {
  const isPrime = new Array(number + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 2; i <= number / 2; i++) {
    if (isPrime[i]) {
      for (let j = i + i; j <= number; j += i) {
        isPrime[j] = false;
      }
    }
  }

  return isPrime[number] ? 'YES' : 'NO';
}

console.log(problem41(23));
