const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if(arguments.length == 0) {
        this.result.push(`()~~`);
        return this
    } else {
        this.result.push(`( ${value} )~~`);
        return this
    }
  },
  removeLink(position) {
      if(Number.isInteger(position) && position > 0 && position <= this.getLength()) {
        position = position - 1;
        this.result = this.result.slice(0, position).concat(this.result.slice(position + 1));
        return this;
      } else {
        this.result = [];
        throw new Error("You can't remove incorrect link!")
      }
      
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    const result = this.result.join('').slice(0, -2);
    this.result = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
