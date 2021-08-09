// 求字符串最长子串的长度
// abcabcbb => 3
// bbbbb => 1
// pwwkew => 3

function longStr(str) {
  if (!str) {
    console.log('请输入参数！');
    return;
  }
  let maxLen = 0;
  let tmp = '';

  for (let val of str) {
    let index = tmp.indexOf(val);
    console.log('index>', index);
    tmp = tmp.substring(index + 1) + val;
    console.log('tmp>', tmp);
    maxLen = Math.max(maxLen, tmp.length);
  }
  return maxLen;
}

console.log(longStr('abcabcbb')); // 3
console.log(longStr('bbbbb')); // 1
console.log(longStr('pwwkew')); // 3