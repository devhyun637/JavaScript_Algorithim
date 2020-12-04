const scores = (string1, string2) => {
  const newObj = {};
  const keys = string1.split(' ');
  const values = string2.split(' ');
  keys.forEach((value, index) => (newObj[value] = parseInt(values[index])));
  return newObj;
};

console.log(scores('Yujin Hyewon', '70 100'));
