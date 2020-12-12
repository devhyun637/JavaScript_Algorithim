function countOne() {
  let answer = 0;

  for (let i = 0; i <= 1000; i++) {
    const numberString = i.toString().split('').map(Number);
    answer += numberString.reduce((sum, currentValue) => (currentValue === 1 ? sum + 1 : sum), 0);
  }

  return answer;
}

// 정규표현식
function countOne2() {
  let answer = '';

  for (let i = 0; i <= 1000; i++) {
    answer += i;
  }

  return answer.match(/1/g).length;
}

console.log(countOne());
console.log(countOne2());
