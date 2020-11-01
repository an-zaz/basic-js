const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  return members
    .map(member => {
      if (typeof member !== 'string') {
        return false;
      }
      return member.trim()[0].toUpperCase()
    })
    .filter(item => item)
    .sort()
    .join('')
};
