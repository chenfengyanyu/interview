/**
 * 自除数 是指可以被它包含的每一位数除尽的数。
 * 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
 * 还有，自除数不允许包含 0 。
 * 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  let arr = [];
  for(let i = left; i <= right; i++) {
      let tmp = [...(i).toString()];
      let flag = 0;
      tmp.forEach(item => {
          if(i % item === 0) flag++;
      })
      if (flag === tmp.length) arr.push(i);
  }
  return arr;
};

selfDividingNumbers(1, 22); // [1,2,3,4,5,6,7,8,9,11,12,15,22]