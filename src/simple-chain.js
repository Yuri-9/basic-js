const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {},
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1]) {
      this.chain.splice(position - 1, 1);
    } else {
      this.chain = [];
      throw new Error("THROWN");
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let finish = this.chain.join("~~");
    this.chain = [];
    return finish;
  },
};

module.exports = chainMaker;
