// 다음 배열에서 400, 500을 삭제하는 code를 입력하세요.

const answer1 = (nums) => nums.slice(0, 3);
const answer2 = (nums) => nums.splice(0, 3);

const nums = [100, 200, 300, 400, 500];
console.log(answer1(nums));
console.log(answer2(nums));
