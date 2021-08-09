// 将 “my-js-code” 按照驼峰格式输出：“myJsCode”
// 普通方式
function covertHump(str) {
  if(!str) return;
  let arr = str.split('-');
  for(let i=1;i< arr.length;i++){
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].substring(1);
  }
  return arr.join('');
}

covertHump('my-js-code');

// 正则方式
function covertHump2(str) {
  let reg = /-(\w)/g;
  return str.replace(reg, ($0, $1) => $1.toUpperCase());
}

covertHump2('my-js-code');