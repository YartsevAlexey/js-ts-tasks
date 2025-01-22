/**
 * Write a function to calculate the days left until the next New Year's eve (In 2023 the next NY is 1th January, 2024 year)
 * @param {Date | string} targetDate
 * @returns {number}
 */
module.exports.getDaysToNewYear = function getDaysToNewYear(targetDate: Date | string): number {
  const isLeapYear = (year: number) => (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  let d: Date;

  if (targetDate instanceof Date) {
    d = targetDate as Date;
  } else if (typeof targetDate === 'string' && /\d{1,2}.\d{1,2}.\d{2,4}/.test(targetDate)) {
    const aDate = (targetDate as string).split('.');
    d = new Date(parseInt(aDate[2] as string, 10), parseInt(aDate[1] as string, 10) - 1, parseInt(aDate[0] as string, 10));
  } else {
    throw new Error('Wrong input data');
  }

  let nextLeapYear = d.getFullYear();
  while (!isLeapYear(nextLeapYear)) {
    nextLeapYear += 1;
  }

  const nextFirstOfJanuary = new Date(nextLeapYear, 0, 1);
  return Math.round((nextFirstOfJanuary.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
};
