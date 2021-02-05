const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let age;
  if (
    +sampleActivity > 0 &&
    +sampleActivity <= 15 &&
    typeof sampleActivity == "string"
  ) {
    age =
      Math.log(MODERN_ACTIVITY / +sampleActivity) /
      (Math.log(2) / HALF_LIFE_PERIOD);
    return Math.ceil(age);
  } else {
    return false;
  }
};
