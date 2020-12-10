function problem42(month, day) {
  const DAYS = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const WEEKS = ['TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN', 'MON'];

  const sumDays = DAYS.reduce((sum, value, index) => (index < month - 1 ? sum + value : sum), day);
  return WEEKS[sumDays % 7];
}

console.log(problem42(12, 21));
