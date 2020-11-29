"use strict";

//같은 숫자는 싫어
const answer1 = (arr) => {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) answer.push(arr[i]);
  }

  return answer;
};

const answer2 = (arr) => arr.filter((value, index) => value !== arr[index + 1]);

const arr = [1, 1, 3, 3, 4, 5];
console.log(answer1(arr));
console.log(answer2(arr));
