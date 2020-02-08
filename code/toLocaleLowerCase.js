/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let result = [];
  for(let i=0;i<str.length;i++) {
      if(str[i] >= 'A' && str[i] <= 'Z') {
          let num = str.charCodeAt(i);
          result.push(String.fromCharCode(num + 32));
      } else {
          result.push(str[i]);
      }
  }
  return result.join('');
};