function solution(arr) {
  let lcm = 1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = arr[i]; j > 0; j--) {
      if (arr[i] % j === 0 && lcm % j === 0) {
        lcm = (arr[i] * lcm) / j;
        break;
      }
    }
  }

  return lcm;
}
