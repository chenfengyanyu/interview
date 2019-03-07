// 将一个 10 进制数转化为 2 进制
function transformBinary(num, bits) {
  let d = parseInt(num / 2);
  let resArry = [num % 2];
  for(; d != 0; ) {
    d = parseInt(d / 2)
    resArry.push(d % 2)
  }
  if (bits) {
    for(var r = resArry.length; r < bits; r++) {
      resArry.unshift(0)
    }
  }
  return resArry.join().replace(/,/g, '')
}

transformBinary(5, 2) // '110'