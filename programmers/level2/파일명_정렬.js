const findHeadToLowerCase = (word) =>
  word
    .split(/[0-9]/)
    .find((str) => str !== '')
    .toLowerCase();

const findNumber = (word) => word.split(/[^0-9]/).find((str) => str !== '');

function solution(files) {
  files.sort((forthFile, backFile) => {
    const forthHead = findHeadToLowerCase(forthFile);
    const backHead = findHeadToLowerCase(backFile);

    if (forthHead > backHead) return 1;
    if (forthHead < backHead) return -1;
    if (forthHead === backHead) {
      const forthNumber = findNumber(forthFile);
      const backNumber = findNumber(backFile);

      return forthNumber - backNumber;
    }
  });

  return files;
}
