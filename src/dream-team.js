const CustomError = require("../extensions/custom-error");

function createDreamTeam(members) {
  if ( !Array.isArray(members)){
    return false;
  }
  let name = [];
  for (let item of members) {
    if ( typeof item === 'string'){
      name.push(item.trim()[0].toUpperCase());
    }
  }
  return name.sort().join('');
}

module.exports =  createDreamTeam;

