`use strict`;

// 문자열 내 p와 y의 개수
function solution(s) {
  const answer =
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
      ? true
      : false;
  return answer;
}
