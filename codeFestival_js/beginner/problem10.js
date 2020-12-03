// 별찍기

const makeTree = (height) => {
  for (let i = 1; i <= height; i++) {
    let tree = '';
    for (let j = 1; j <= height - i; j++) {
      tree = tree.concat(' ');
    }
    for (let j = 1; j < i * 2; j++) {
      tree = tree.concat('*');
    }
    console.log(tree);
  }
};

makeTree(5);
