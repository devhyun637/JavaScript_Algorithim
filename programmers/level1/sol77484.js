function solution(lottos, win_nums) {
  const answer = new Array();
  const matchNums = new Set();
  let deleteNumCounts = 0;

  const result = {
    0: 6,
    1: 6,
    2: 5,
    3: 4,
    4: 3,
    5: 2,
    6: 1,
  };

  lottos.forEach((lotto) => {
    if (lotto === 0) deleteNumCounts++;
    else matchNums.add(lotto);
  });
  win_nums.forEach((winNum) => matchNums.add(winNum));

  const matchingNum = 12 - matchNums.size - deleteNumCounts;
  answer.push(result[matchingNum + deleteNumCounts]);
  answer.push(result[matchingNum]);

  return answer;
}
