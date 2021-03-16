const CustomError = require("../extensions/custom-error");

class DepthCalculator {
  constructor(){
    this.count = 0;
  }
  calculateDepth(arr) {
    let arrOfRes = [];
    this.count = this.count + 1;
    for (let item of arr) {
      if (Array.isArray(item)) {
        arrOfRes.push(this.calculateDepth(item));
      }
    }
    return Math.max(...arrOfRes, this.count--);
  }
}


module.exports = DepthCalculator;
const depthCalc = new DepthCalculator();

