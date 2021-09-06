const makeTree1 = (height) => {
  return Array.from({ length: height }).reduce((answer, _, index) => {
    answer +=
      ' '.repeat(height - (index + 1)) + '*'.repeat(index * 2 + 1) + '\n';
    return answer;
  }, '');
};

const makeTree2 = (height) => {
  let answer = '';
  for (let i = 0; i < height; i++) {
    answer += ' '.repeat(height - (i + 1)) + '*'.repeat(i * 2 + 1) + '\n';
  }
  return answer;
};

console.log(makeTree1(5));
console.log(makeTree2(5));
