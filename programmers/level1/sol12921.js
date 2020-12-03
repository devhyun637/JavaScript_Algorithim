function solution(n) {
  const primeNumber = new Array(n + 1);
  primeNumber.fill(true);

  for (let i = 2; i <= n / 2; i++) {
    if (primeNumber[i]) {
      for (let j = i + i; j <= n; j += i) {
        primeNumber[j] = false;
      }
    }
  }

  return primeNumber.filter((value) => value).length - 2;
}

console.log(solution(10));
