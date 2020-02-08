// 转义摩尔斯密码
var uniqueMorseRepresentations = function(words) {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let res = [];
  for(let i = 0; i < words.length; i++) {
      let str = '';
      for(let j = 0; j < words[i].length; j++) {
        str += morse[[...abc].indexOf(words[i][j])];
      }
      res.push(str);
  }
  
  return new Set(res).size;
};
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])