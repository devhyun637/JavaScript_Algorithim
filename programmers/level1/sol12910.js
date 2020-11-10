`use strict`;

//나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = arr.filter(array => array % divisor === 0).sort((a, b) => a - b);
  if (answer.length === 0) answer.push(-1);
  return answer;
}
