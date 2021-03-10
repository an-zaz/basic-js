const CustomError = require("../extensions/custom-error");

function getSeason(date) {
 if (!arguments.length){
   return 'Unable to determine the time of year!';
 }
 if (date.getMonth !== Date.prototype.getMonth) {
   throw new Error();
 }
 let month = date.getMonth();
 if (month === 11 || month === 0 || month === 1) {
   return 'winter';
 }
 if (month >= 2 && month <= 4) {
    return 'spring';
  }
 if (month >= 5 && month <= 7) {
    return 'summer';
  }
 if (month  >= 8 && month <= 10) {
    return 'autumn';
  }
};

module.exports = getSeason;
