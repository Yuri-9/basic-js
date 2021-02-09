const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";
  Date.prototype.toString.call(date);
  let month = date.getMonth();
  console.log(month);
  let season;
  if (month == 0 || month == 1 || month == 11) {
    season = "winter";
  } else if (2 <= month && month <= 4) {
    season = "spring";
  } else if (5 <= month && month <= 7) {
    season = "summer";
  } else if (8 <= month && month <= 10) {
    season = "autumn";
  } else {
    season = "THROWN";
  }
  return season;
};
