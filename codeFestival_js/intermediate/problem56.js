function problem56(nationWidth) {
  this.nationWidth = nationWidth;
  const KOREA_WIDTH = this.nationWidth.korea;
  delete this.nationWidth.korea;

  const nations = Object.keys(nationWidth);
  let minWidth = KOREA_WIDTH;

  const answer = nations.reduce((nation, currentNation) => {
    if (minWidth > Math.abs(KOREA_WIDTH - nationWidth[currentNation])) {
      minWidth = Math.abs(KOREA_WIDTH - nationWidth[currentNation]);
      nation = currentNation;
    }
    return nation;
  }, '');

  return `${answer} ${minWidth}`;
}

const nationWidth = {
  korea: 220877,
  Russia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

console.log(problem56(nationWidth));
