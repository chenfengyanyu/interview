/**
 * 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。
 * 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  let temp = (num).toString(2);
  let arr = [...temp].map(item => {
      return item === '0' ? item = 1 : item = 0;
  });
  return parseInt(arr.join(''), 2);
};