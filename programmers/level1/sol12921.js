`use strict`;

function solution(n) {
  let answer = -2;
  const primeNumber = new Array(n + 1);
  primeNumber.fill(0);

  for (let i = 2; i <= n / 2; i++) {
    if (primeNumber[i] === 0) {
      for (let j = i + i; j <= n; j += i) {
        primeNumber[j] = 1;
      }
    }
  }

  primeNumber.forEach(number => {
    if (number === 0) answer++;
  });

  return answer;
}
