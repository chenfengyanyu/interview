// 实现计算方法 eval('1+3*4')
// eval()是一个函数，有且只有一个参数string，为字符串类型;
// 若string为js代码时，会直接解析执行，若是普通字符串，则返回原字符串。
function myEval(str) {
  let temp;
  try {
    temp = new Function('return ' + str)();
  } catch(e) {
    // 无法判断是“正常字符串”还是“可执行字符串”，因此使用异常捕获处理，有更好的方案欢迎交流～
    if(e.stack?.indexOf('ReferenceError') > -1) temp = str;
  }
  return temp;
}

console.log(myEval('1+3*4')); // 13
console.log(myEval('hi, jartto')); // "hi, jartto"
console.log(myEval('[1,2,3]')); // [1,2,3]
console.log(myEval('{name: "jartto"}')); // {name: "jartto"}