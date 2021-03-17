const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

const k = 0.693 / HALF_LIFE_PERIOD;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || !+sampleActivity || +sampleActivity <= 0) {
    return false
  }
  const result = Math.ceil(Math.log(MODERN_ACTIVITY / +sampleActivity) / k)
  if (result < 0) {
    return false;
  }
  return result;
};
