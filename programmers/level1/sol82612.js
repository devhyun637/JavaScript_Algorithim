function solution(price, money, count) {
  const needMoney =
    new Array(count)
      .fill(0)
      .reduce((sum, _, index) => (sum += (index + 1) * price), 0) - money;

  return needMoney > 0 ? needMoney : 0;
}
