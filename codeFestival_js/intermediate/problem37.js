function solve1(students) {
  const votes = {};
  students
    .split(' ')
    .forEach((student) => (votes[student] ? votes[student]++ : (votes[student] = 1)));

  const results = Object.values(votes).map((result) => Number(result));
  const maxVotes = Math.max(...results);
  const leader = Object.keys(votes)
    .filter((value) => maxVotes === votes[value])
    .join(',');

  return `${leader}(이)가 총 ${maxVotes}표로 반장이 되었습니다.`;
}

function solve2(students) {
  const votes = {};
  students
    .split(' ')
    .forEach((student) => (votes[student] ? votes[student]++ : (votes[student] = 1)));

  const leader = Object.keys(votes).reduce((maxVotes, currentVotes) =>
    votes[currentVotes] > votes[maxVotes] ? currentVotes : maxVotes
  );
  return `${leader}(이)가 총 ${votes[leader]}표로 반장이 되었습니다.`;
}

console.log(solve1('원범 원범 혜원 혜원 혜원 혜원 유진 유진'));
console.log(solve2('원범 원범 혜원 혜원 혜원 혜원 유진 유진'));
