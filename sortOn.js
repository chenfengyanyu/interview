// 对只包含0、1、2三种元素的数组进行排序，时间复杂度：O(n)
function sortOn(arr) {
  let p0 = 0;
  let p1 = arr.length - 1;
  let p2 = p0;
  
  while(p2 <= p1) {
    if (arr[p2] === 1) {
      p2 ++;
    } else if (arr[p2] === 2) {
      exchange(arr, p2, p1--);
    } else {
      exchange(arr, p2++, p0++);
    }
  }
  return arr;
}

// 交换
function exchange(arr, a, b) {
  let tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}

sortOn([0, 1, 2, 2, 1, 1, 0]);

// 方式二
// https://blog.csdn.net/lujie1996/article/details/79829008
function sortOn(arr) {
  let zero = 0, two = arr.length - 1;
  for (let i = 0; i <= two; i++) {
      while (arr[i] == 2 && i < two) {
        exchange(arr, i, two);
          two--;
      }
      while (arr[i] == 0 && i > zero) {
          // i > zero condition ensures that when arr[] = {0}, it doesn't swap(arr[0], arr[0]) forever.
          exchange(arr, i, zero);
          zero++;
      }
  }
  return arr;
}

sortOn([0, 1, 2, 2, 1, 1, 0]);

