function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

console.log(solution([]));
console.log(solution([1, 10, 2, -1, 2]));
