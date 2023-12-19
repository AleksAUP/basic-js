const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) {
    return false
  }
  const arr = []
  let nameDream = ''
 for (let i = 0; i < members.length; i++) {
  debugger
   if ( typeof members[i] === 'string' || members[i] instanceof String) {
     arr.push(members[i])
   }
 }
 let sortedArr = arr.sort()
   for (let i = 0; i < sortedArr.length; i++) {
    nameDream += sortedArr[i].toUpperCase().trim().charAt(0);
    
   }
  let sortedNameDream = nameDream.split('').sort().join('')
   return sortedNameDream
}

module.exports = {
  createDreamTeam
};
