const changeWord = (str) => {
  return str.replace(/q/gi, 'e');
};

const changeWord2 = (str) => {
  return str.split('q').join('e');
};

console.log(changeWord('hqllo my namq is hyqwon'));
console.log(changeWord2('hqllo my namq is hyqwon'));
