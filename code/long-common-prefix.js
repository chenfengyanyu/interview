/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return '';
  let result = '';
  let len = Math.min.apply(Math, strs.map(item => item.length));
  for(let i = 0; i < len; i++) {
      let tmp = strs.map(item => item.substring(0, i+1));
      if (new Set(tmp).size === 1) result = tmp[0];
  }
  return result;
};
// 输入: ["flower","flow","flight"]
// 输出: "fl"