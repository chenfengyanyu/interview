// 对数组对象进行扩展
Array.prototype.reduce = Array.prototype.reduce || function(func, initVal) {
  let arr = this;
  // 设置起始值
  let base = typeof initVal === 'undefined' ? arr[0] : initVal;
  // 设置起始位置
  let startPoint = typeof initVal === 'undefined' ? 1 : 0;
  arr.slice(startPoint).forEach(function(val, index) {
    base = func(base, val, index + startPoint, arr);
  })
  return base
}

// 用例
let arr = [1,2,3,4];
arr.reduce((prev, cur, index, arr) => {
  console.log(prev, cur, index, arr);
  return prev + cur;
}, 10)

// 输出
// 10 1 0 (4) [1, 2, 3, 4]
// 11 2 1 (4) [1, 2, 3, 4]
// 13 3 2 (4) [1, 2, 3, 4]
// 16 4 3 (4) [1, 2, 3, 4]