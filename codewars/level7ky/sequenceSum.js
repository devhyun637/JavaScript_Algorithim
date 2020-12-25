const SequenceSum = (function () {
  function SequenceSum() {}

  SequenceSum.showSequence = function (count) {
    if (count === 0) return `0=0`;
    if (count < 0) return `${count}<0`;

    let answerString = '';
    let answerNum = 0;
    for (let i = 0; i < count; i++) {
      answerString += `${i}+`;
      answerNum += i;
    }
    return `${answerString}${count} = ${answerNum + count}`;
  };

  return SequenceSum;
})();

console.log(SequenceSum.showSequence(6));
