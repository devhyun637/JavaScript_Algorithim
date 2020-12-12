function decorationString(string) {
  const TOTAL_LENGTH = 50;
  if (string.length === TOTAL_LENGTH) return '글자가 너무 깁니다';

  const decorationStr = '='.repeat(Math.floor(TOTAL_LENGTH - string.length) / 2);
  return `${decorationStr}${string}${decorationStr}`;
}

function decorationString2(string) {
  const TOTAL_LENGTH = 50;
  const decorationStrLength = string.length + Math.floor((TOTAL_LENGTH - string.length) / 2);
  return string.padStart(decorationStrLength, '=').padEnd(TOTAL_LENGTH, '=');
}

console.log(decorationString('가나다라마바'));
console.log(decorationString2('가나다라마'));
