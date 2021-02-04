const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCat = 0;
  matrix.forEach((item) => {
    countCat = countCat + item.filter((cat) => cat == "^^").length;
  });
  return countCat;
};
