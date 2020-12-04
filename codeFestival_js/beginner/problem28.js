const print = (string) => {
  const stringArrays = string.split('');
  stringArrays.forEach((value, index) => {
    if (index + 1 !== string.length) {
      console.log(`${value} ${stringArrays[index + 1]}`);
    }
  });
};

print('Javascript');
