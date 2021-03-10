const CustomError = require("../extensions/custom-error");

function countCats(arr) {
  let ears = [];
  for (let item of arr) {
    ears.push(...item.filter((sign) => sign === '^^'));
  }
  return ears.length;
}

module.exports = countCats;

