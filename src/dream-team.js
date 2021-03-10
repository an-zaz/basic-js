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

console.log(createDreamTeam([
  'Amelia',
  null,
  undefined,
  'Ruby',
  'Lily',
  11,
  'Grace',
  22,
  'Millie',
  'Daisy',
  true,
  'Freya',
  false,
  'Erin',
  new Set([1,2,3,4,5]),
  'Megan',
  {
    'John': 'Smith'
  },
  'Jasmine',
  1,
  2,
  3,
  4,
  5,
  'Brooke',
]));
