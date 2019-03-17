### 算法练习
编程题练习，提供一些解决思路。算法题大部分来自 `LeetCode`，一小部分来自`算法图解`，其余来自网络。

#### 七、翻转二叉树：invert-tree.js
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var invertTree = function(root) {
  if(!root) return null;
  let temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};
// 输入：[4,2,7,1,3,6,9]
// 输出：[4,7,2,9,6,3,1]
```

#### 六、深度优先遍历：graph.js
```js
// 定义散列表
let graph = new Map();
graph.set('you', ['alice', 'bob', 'claire']);
graph.set('bob', ['anuj', 'peggy']);
graph.set('alice', ['peggy']);
graph.set('claire', ['thom', 'jonny']);
graph.set('anuj', []);
graph.set('peggy', []);
graph.set('thom', []);
graph.set('jonny', []);

function search(name) {
  let queue = [];
  let searched = [];
  queue = queue.concat(graph.get(name));

  while (queue.length > 0) {
    person = queue.shift();
    if (!searched.includes(person)) {
      if (isSeller(person)) {
        console.log(`${person} is a mango seller`);
        return true;
      } else {
        queue = queue.concat(graph.get(person));
        searched.push(person);
      }
    }
  }
  return false;
}

// 检查人的姓名是否以m结尾：如果是，他就是芒果销售商。
function isSeller(name) {
  return name[name.length-1] == 'm';
}

search('you');
```


#### 五、给定一个正整数，输出它的补数：find-complement.js
补数是对该数的二进制表示取反。
```js
// 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
var findComplement = function(num) {
  let temp = (num).toString(2);
  let arr = [...temp].map(item => {
      return item === '0' ? item = 1 : item = 0;
  });
  return parseInt(arr.join(''), 2);
};
```

#### 四、斐波那契数列：fibonacci.js
1.递归，效率不高
```js
function fibonacci(n) {
  if(n < 2) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

fibonacci(100) // 效率太低，会造成浏览器崩溃
```

2.优化
```js
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
```

#### 三、深拷贝：deep-clone.js
1.方式一
```js
function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}   

let arr1 = [1, 2, 3],
    arr2 = deepClone(arr1);

arr1.push(4);
console.log(arr1, arr2); // [1,2,3,4], [1,2,3]
```

2.方式二
```js
function deepClone(obj) {
  let o = Array.isArray(obj) ? [] : {};
  for(let k in obj)
    o[k] = typeof obj[k] === 'object' ? deepClone(obj[k]) : obj[k];
  return o;
}

let arr1 = [1, 2, [3, 4], 5];
let arr2 = deepClone(arr1);
arr2[2][0] = 6;

console.log(arr1);
console.log(arr2);
```

3.方式三 
```js
let arr1 = [1, 2, [3, 4], 5];
let arr2 = arr1.concat(); // 会出问题，数组嵌套，就会成为浅拷贝

arr2[2][0] = 6;

console.log(arr1);
console.log(arr2);
```

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