/**
 * Write a function converting temperature, weight and distance. Precision is 2 number after digits
 * @param {string | number} value
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} from
 * @param {'m'|'mi'|'gr'|'pound'|'C'|'K'} to
 * @returns {boolean}
 */
module.exports.converter = function (value: number, from: string, to: string): number {
  const C_K = 273.15;
  const M_MI = 1609.34;
  const GR_POUND = 453.592;

  const round2 = (num: number) => Math.round(num * 100) / 100;

  type Temperature = 'C' | 'K';
  type Distance = 'm' | 'mi';
  type Weight = 'gr' | 'pound';

  const isTemperature = (x: string): x is Temperature => ['C', 'K'].includes(x);
  const isDistance = (x: string): x is Distance => x === 'm' || x === 'mi';
  const isWeight = (x: string): x is Weight => x === 'gr' || x === 'pound';

  if (isTemperature(from) && isTemperature(to)) {
    return round2(value + (from === 'C' ? C_K : -C_K));
  }
  if (isDistance(from) && isDistance(to)) {
    return round2(from === 'm' ? value / M_MI : value * M_MI);
  }
  if (isWeight(from) && isWeight(to)) {
    return round2(from === 'gr' ? value / GR_POUND : value * GR_POUND);
  }

  throw new Error('Wrong input data');
};
