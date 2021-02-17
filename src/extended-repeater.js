const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {
    repeatTimes,
    separator = "+",
    addition,
    additionRepeatTimes,
    additionSeparator = "|",
  } = options;

  let additionSentence = additionRepeatTimes
    ? new Array(additionRepeatTimes)
        .fill(String(addition))
        .join(additionSeparator)
    : addition || "";

  let sentence = repeatTimes
    ? new Array(repeatTimes)
        .fill(String(str) + additionSentence)
        .join(separator)
    : str + addition;
  return sentence;
};
