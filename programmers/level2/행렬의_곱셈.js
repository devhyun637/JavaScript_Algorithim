function solution(arr1, arr2) {
  const answer = new Array(arr1.length)
    .fill([])
    .map((item) => (item = new Array(arr2[0].length).fill(0)));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let number = 0;

      for (let k = 0; k < arr1[0].length; k++) {
        number += arr1[i][k] * arr2[k][j];
      }

      answer[i][j] = number;
    }
  }

  return answer;
}
