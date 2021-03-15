const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (arguments.length) {
      this.arr[this.arr.length] = value;
    } else {
      this.arr[this.arr.length] = '';
    }
    return this;
  },
  removeLink(position) {
    if ( typeof position !== 'number' && !Number.isFinite(position) ){
      this.cleanChain();
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let str = this.arr.map( function (item) {
      return `( ${item} )~~`
    }).join('');
    this.cleanChain();
    return  str.slice(0, str.length - 2);
  },
  cleanChain() {
    this.arr = [];
  }
};

module.exports = chainMaker;
console.log(
  chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain(), '( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )'
);

