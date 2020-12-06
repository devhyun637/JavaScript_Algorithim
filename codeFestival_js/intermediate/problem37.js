const classPresidentElection = (string) => {
  const result = {};
  string.split(' ').map((value) => (result[value] ? result[value]++ : (result[value] = 1)));

  const winner = Object.keys(result).reduce((candidate, current) =>
    result[candidate] < result[current] ? current : candidate
  );

  return `${winner}가 총 ${result[winner]}표로 반장이 되었습니다.`;
};

console.log(classPresidentElection('원범 원범 혜원 혜원 혜원 혜원 유진 유진'));
