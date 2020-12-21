function findUniq1(arr) {
  arr.sort();
  return arr[0] === arr[1] ? arr[arr.length - 1] : arr[0];
}

function findUniq2(arr) {
  arr.sort();
  return arr[0] === arr[1] ? arr.pop() : arr[0];
}

console.log(findUniq1([0, 1, 0]));
console.log(findUniq2([0, 1, 0]));
