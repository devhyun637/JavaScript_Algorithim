function number(busStops) {
  return busStops.reduce(
    (restOfPeople, [numOfpassenger, numOfDropOff]) =>
      restOfPeople + numOfpassenger - numOfDropOff,
    0
  );
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
);
