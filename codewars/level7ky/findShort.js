function findShort(s) {
  let answer = s.length;
  s.split(' ').forEach((value) => (answer = value.length < answer ? value.length : answer));
  return answer;
}

console.log(findShort('bitcoin take over the world maybe who knows perhaps'));
