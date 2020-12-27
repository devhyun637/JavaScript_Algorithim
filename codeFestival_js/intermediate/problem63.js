function problem63(string) {
  return string.split(' ').reduce((answer, word) => (answer += word[0]), '');
}

console.log(problem63('복잡한 세상 편하게 살자'));
