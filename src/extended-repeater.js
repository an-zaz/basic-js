const CustomError = require("../extensions/custom-error");

function repeater(str, { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1,  additionSeparator = '|' } = {}) {
  let newStr = str;
  let additionStr = '';
  if (additionRepeatTimes) {
    additionStr = (String(addition) + String(additionSeparator)).repeat(additionRepeatTimes - 1) + String(addition);
  }
  newStr = newStr + additionStr;
  if (repeatTimes) {
    newStr = (newStr + String(separator)).repeat(repeatTimes - 1) + String(newStr);
  }
  return newStr;
}

module.exports = repeater;


