// 递归
function fibonacci(n) {
  if(n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(100) // 效率太低，会造成浏览器崩溃


// 优化
function fibonacci(n) {
  if(n < 2) return n;
  let one = 1;
  let two = 0;
  let res = 0;

  for(let i = 2; i <= n; i++) {
    res = one + two;

    two = one;
    one = res;
  }

  return res;
}
fibonacci(100); // 354224848179262000000
