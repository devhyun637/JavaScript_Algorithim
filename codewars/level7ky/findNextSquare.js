function findNextSquare1(sq) {
  return Math.pow(Math.trunc(Math.sqrt(sq)), 2) === sq ? Math.pow(Math.sqrt(sq) + 1, 2) : -1;
}

function findNextSquare2(sq) {
  return Math.sqrt(sq) % 1 ? -1 : Math.pow(Math.sqrt(sq) + 1, 2);
}

console.log(findNextSquare1(144));
console.log(findNextSquare2(144));
