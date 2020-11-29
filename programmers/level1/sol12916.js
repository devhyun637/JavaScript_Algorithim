`use strict`;

// 문자열 내 p와 y의 개수
function solution(s) {
  return (
    s.toLowerCase().split("p").length === s.toLowerCase().split("y").length
  );
}
