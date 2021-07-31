/*
 * @Author: Jartto
 * @Date: 2021-03-20 15:32:49
 * @LastEditTime: 2021-03-20 17:20:43
 */

// # 例如, 给定如下二维数组
// # [1, 2, 3],
// # [4, 5, 6],
// # [7, 8, 9]
// # 输出结果：[1, 2, 4, 3, 5, 7, 6, 8, 9]
const printArray = (arr) => {
  let result = [];
  let len = arr.length;
  let inity = 0;
  if (!Array.isArray(arr)) return;
  // 00,10,01,20,11,02,12,21,22
  for (let i = 0; i < len;) {
    let initx = i;
    let j = inity;

    while (arr[j] && arr[j][initx]) {
      result.push(arr[j][initx]);
      initx--;
      j++;
    }

    if(i+1 < len){
      i++;
    } else {
      inity++;
      if(inity >= len) {
        break;
      }
    }
  }
  return result;
}

printArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);