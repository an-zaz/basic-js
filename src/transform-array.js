const CustomError = require("../extensions/custom-error");

function transform(arr) {
  if (!Array.isArray(arr)){
    throw new Error;
  }
  let newArr = [];
  let isNextItemShouldBeSkipped = false;
  let isPrevItemDeleted = false;
  arr.forEach(function(item, index, arr){
    if (isNextItemShouldBeSkipped){
      isNextItemShouldBeSkipped  = false;
      isPrevItemDeleted = true;
      return;
    }
    if (item === '--discard-next'){
      isNextItemShouldBeSkipped = true;
    } else if (item === '--discard-prev'){
      if(isPrevItemDeleted) {
        isPrevItemDeleted = false;
        return;
      }
      newArr.pop();
    } else if (item === '--double-next'){
      if (index === arr.length - 1){
        return;
      }
      newArr.push(arr[index + 1]);
    } else if (item === '--double-prev'){
      if (!newArr.length){
        return;
      }
      if(isPrevItemDeleted) {
        isPrevItemDeleted = false;
        return;
      }
      newArr.push(newArr[newArr.length - 1]);
    } else {
      isPrevItemDeleted = false;
      newArr.push(item);
    }
  });
  return newArr;
}

module.exports = transform;


console.log(transform([ '--double-prev',  false,  '--discard-next',  '8.963',  '--discard-next',  'DEF',  0,  0,  '--discard-prev' ]));
[ false, 0 ]
