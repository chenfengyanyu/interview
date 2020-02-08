// 求字符串最长子串
function longstr(str) {
  let temp = {
    str: '',
    max: ''
  }
  let arr = [];
  if (!str) return;
  for(let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
      temp.str += str[i];
      temp.max = temp.str.length > temp.max.length ? temp.str : temp.max;
    } else {
      arr = [];
      temp.str = [];
    }
  }
  return `最长子串为：${temp.max}，长度为：${temp.max.length}`;
}

longstr('abcddefghijkllllmn'); // 最长子串为：efghijkl，长度为：8