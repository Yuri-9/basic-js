const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arrNew = [];
  let isDiscardNext = false;

  arr.forEach((item, index, arr) => {
    switch (item) {
      case "--discard-next":
        arrNew.push(undefined);
        isDiscardNext = true;
        break;
      case "--discard-prev":
        if (arrNew[arrNew.length - 1] !== undefined) {
          arrNew.pop();
        }
        break;
      case "--double-next":
        arrNew.push(arr[index + 1]);
        break;
      case "--double-prev":
        if (arrNew[arrNew.length - 1] !== undefined) {
          arrNew.push(arr[index - 1]);
        }
        break;
      default:
        if (!isDiscardNext) {
          arrNew.push(item);
        }
        isDiscardNext = false;
        break;
    }
  });

  arrNew = arrNew.filter((item) => item !== undefined);

  return arrNew;
};
