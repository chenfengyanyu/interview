/**
 * @param {string[]} A
 * @return {number}
 */
let minDeletionSize = function(A) {
  let count = 0;
  for(let i = 0; i < A[0].length; i++) {
      for(let j = 0; j < A.length - 1; j++) {
          if(A[j].charAt(i) > A[j+1].charAt(i)) {
              count++;
              break;
          }
      }
  }
  return count;
};