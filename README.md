### LeetCode 算法练习
编程题练习，提供一些解决思路。

#### 二、二分查找：binary-search.js
```js
const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let guess;

  while (start <= end) {
    let mid = Math.ceil((start + end) / 2);
    guess = arr[mid];
    if (guess === val) 
      return mid;
    if (guess > val) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}

binarySearch([1, 3, 5, 7, 9], 3);
```

#### 一、数组扁平化：array-flat.js
1.循环 ＋ 递归
```js
function flatArray(arr) {
  let result = [];
  arr.forEach(item => {
    if(Array.isArray(item)) {
      result = result.concat(flatArray(item));
    } else {
      result.push(item)
    }
  });
  return result;
}

flatArray([1, 2, 3, 4, [5, 6], 7]);
```
2.使用 reduce
```js
function flatten(arr){
  return arr.reduce(function(prev, cur){
      return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
  },[])
}

flatten([1, 2, 3, 4, [5, 6], 7]);
```
3.使用 ES6 扩展符
```js
function flatten(arr){
  while(arr.some(item => Array.isArray(item))){
      arr = [].concat(...arr);
  }
  return arr;
}

flatten([1, 2, 3, 4, [5, 6], 7]);
```