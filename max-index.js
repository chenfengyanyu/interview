/**
 * 我们把符合下列属性的数组 A 称作山脉：
 * A.length >= 3
 * 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
 * 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。
 * 其实考察最大值索引，也可以使用二分查找
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
  console.log(A);
  let i = 0;
  let tmp = 0;
  while( i < A.length - 1) {
      if(A[i] < A[i+1]) {
          tmp = i+1;
          i++;
      } else {
          return i;
      }
  }
  return tmp;
};