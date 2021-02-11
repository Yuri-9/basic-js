const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    let depth;
    if (Array.isArray(arr)) {
      if (arr.length == 0) {
        depth = 1;
      } else {
        depth = 1 + Math.max(...arr.map((item) => this.calculateDepth(item)));
      }
    } else {
      depth = 0;
    }
    return depth;
  }
};
