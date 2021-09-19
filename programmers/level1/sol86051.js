function solution1(numbers) {
  return 45 - numbers.reduce((sum, num) => (sum += num), 0);
}

function solution2(numbers) {
  const arr = new Array(10).fill(false);
  arr.forEach((_, index) => {
    if (numbers.includes(index)) {
      arr[index] = true;
    }
  });

  return arr.reduce((sum, bool, index) => (sum += !bool ? index : 0), 0);
}
