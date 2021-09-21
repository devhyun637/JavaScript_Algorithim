function solution(s) {
  const strArr = s.split(' ');
  return strArr
    .map((str) => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase())
    .join(' ');
}
