const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECOND_PER_HOUR = 3600;
  let turns = 2 ** disksNumber - 1;
  let seconds = Math.floor((SECOND_PER_HOUR * turns) / turnsSpeed);

  return { turns, seconds };
};
