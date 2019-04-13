### 🍺🍺🍺 算法练习 🍺🍺🍺
编程题练习，答案不一定准确，提供一些解决思路。
算法题大部分来自 `LeetCode`，一部分来自`算法图解`，一部分来自`剑指 Offer`， 其余来自网络。

#### 三十七、数字转金额
1.含小数控制
```js
function formatMoney(s, type) {  
    if (/[^0-9\.]/.test(s))  
        return "0";  
    if (s == null || s == "")  
        return "0";  
    s = s.toString().replace(/^(\d*)$/, "$1.");  
    s = (s + "00").replace(/(\d*\.\d\d)\d*/, "$1");  
    s = s.replace(".", ",");  
    var re = /(\d)(\d{3},)/;  
    while (re.test(s))  
        s = s.replace(re, "$1,$2");  
    s = s.replace(/,(\d\d)$/, ".$1");  
    if (type == 0) {// 不带小数位(默认是有小数位)
        var a = s.split(".");  
        if (a[1] == "00") {  
            s = a[0];  
        }  
    }  
    return s;  
}  
formatMoney('13222222',3)
```
2.字符串正则处理
```js
function format_number(n){  
   var b=parseInt(n).toString();  
   var len=b.length;  
   if(len<=3){return b;}  
   var r=len%3;  
   return r>0?b.slice(0,r)+","+b.slice(r,len).match(/\d{3}/g).join(","):b.slice(r,len).match(/\d{3}/g).join(",");  
 }  
 format_number('4524324234');
 ```
 3.正则
 ```js
var num='12345678';
var str = num.replace(/\d(?=(?:\d{3})+\b)/g,'$&,');
console.log(str); //"12,345,678"
//扩展Number方法
Number.prototype.toCurrencyString=function(){
  return this.toFixed(2).replace(/\d(?=(?:\d{3})+\b)/g,'$&,'); 
}
```

#### 三十六、找出非降序数列的个数
```js
/**
 * @param {string[]} A
 * @return {number}
 */
var minDeletionSize = function(A) {
    let count = 0;
    for(let i = 0; i < A[0].length; i++) {
        for(let j = 0; j < A.length - 1; j++) {
            if(A[j].charAt(i) > A[j+1].charAt(i)) {
                count++;
                break;
            }
        }
    }
    return count;
};
输入：["cba", "daf", "ghi"]
输出：1
```

#### 三十五、搜索二叉树
```js
var searchBST = function(root, val) {
  if(!root) return null;
  // console.log(root);
  if(root.val === val) {
      return root;
  } else if(root.val > val) {
      return searchBST(root.left, val);
  } else {
      return searchBST(root.right, val);
  }
};
```

#### 三十四、最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。
```js
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length === 0) return '';
    let result = '';
    let len = Math.min.apply(Math, strs.map(item => item.length));
    for(let i = 0; i < len; i++) {
        let tmp = strs.map(item => item.substring(0, i+1));
        if (new Set(tmp).size === 1) result = tmp[0];
    }
    return result;
};
// 输入: ["flower","flow","flight"]
// 输出: "fl"
```

#### 三十三、N 叉树的后序遍历
给定一个 N 叉树，返回其节点值的后序遍历。给定数据结构：
```json
{
  "$id":"1",
  "children":[
    {
      "$id":"2",
      "children":[
        {
          "$id":"5",
          "children":[],
          "val":5
        },
        {
          "$id":"6",
          "children":[],
          "val":6
        }
      ],
      "val":3
    }, {
      "$id":"3",
      "children":[],
      "val":2
    }, {
      "$id":"4",
      "children":[],
      "val":4
    }],
    "val":1
  }
```
思路一：先从跟节点遍历，然后对结果反转处理：
```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
let postorder = function(root) {
    if(!root) return [];
    let res = [];
    let list = [root];
    while(list.length) {
        let one = list.pop();
        res.push(one.val);
        one.children && one.children.reduce((pre, item) => {
            list.push(item);
            return list;
        },list);
    }
    return res.reverse();
};
```
思路二：递归
```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
let res = [];
var postorder = function(root) {
    if(!root) {
        return [];
    } else {
        return root.children.reduceRight((res, node) => 
            [...postorder(node), ...res],
            [root.val]
        )                              
    }
};
```

#### 三十二、判断机器人移动
1.在二维平面上，有一个机器人从原点 (0, 0) 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在 (0, 0) 处结束。
2.移动顺序由字符串表示。字符 move[i] 表示其第 i 次移动。
3.机器人的有效动作有 R（右），L（左），U（上）和 D（下）。如果机器人在完成所有动作后返回原点，则返回 true。否则，返回 false。
```js
/**
 * @param {string} moves
 * @return {boolean}
 */
var robotMove = function(moves) {
  let x = 0;
  let y = 0;
  [...moves].forEach(item => {
      if(item === 'R') x++;
      if(item === 'L') x--;
      if(item === 'U') y++;
      if(item === 'D') y--;
  })
  
  return x === 0 && y === 0
};
```

#### 三十一、实现 toLocaleLowerCase 函数
```js
/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
    let result = [];
    for(let i=0;i<str.length;i++) {
        if(str[i] >= 'A' && str[i] <= 'Z') {
            let num = str.charCodeAt(i);
            result.push(String.fromCharCode(num + 32));
        } else {
            result.push(str[i]);
        }
    }
    return result.join('');
};
```

#### 三十、N 叉树的前序遍历：tree-pre-order.js
给定一个 `N` 叉树，返回其节点值的前序遍历。
```js
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if(!root) return [];
  let res = [];
  let list = [root];
  while(list.length) {
      let one = list.pop();
      res.push(one.val);
      one.children && one.children.reduceRight((pre, item) => {
          list.push(item);
          return list;
      },list);
  }
  return res;
};

preorder({"$id":"1","children":[{"$id":"2","children":[{"$id":"5","children":[],"val":5},{"$id":"6","children":[],"val":6}],"val":3},{"$id":"3","children":[],"val":2},{"$id":"4","children":[],"val":4}],"val":1});
```

#### 二十九、按照奇偶对数组排序：sort-array-by-parity.js
给定一个非负整数数组 `A`， `A` 中一半整数是奇数，一半整数是偶数。
对数组进行排序，以便当 `A[i]` 为奇数时，`i` 也是奇数；当 `A[i]` 为偶数时， `i` 也是偶数。
```js
// 输入：[4,2,5,7]
// 输出：[4,5,2,7]
// 解释：[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。
var sortArrayByParity = function(A) {
  let j = 1;
  let len = A.length - 1;
  for(let i = 0; i < len; i += 2) {
      if((A[i] & 1) !== 0) {
          while((A[j] & 1) !== 0) {
              j += 2;
          }
          let tmp = A[i];
          A[i] = A[j];
          A[j] = tmp;
      }
  }
  return A;
};
sortArrayByParity([4,1,2,1]); //[4,1,2,1]
```

#### 二十八、删除子数组：delete-sub-array.js
```js
function deleteSubArray(a, b){
  for(var i = 0;i < a.length;i ++){
    for(var j = 0;j < b.length;j ++){
      if(a[i] == b[j]){
        a.splice(i,1);
        --i;
        break;
      }
    }
  }
}

deleteSubArray([1,3,4], [4,2]); // [1, 3]

```

#### 二十七、数组按照 key1 进行排序，再按照 key2 进行排序：sort-key1-key2.js
如下，先按照日期进行排序，如果日期相同，则按照分数降序排序。
```js
const arr = [{
  "score": 80,
  "date" : "2"
}, {
  "score": 66,
  "date" : "1"
},{
  "score": 77,
  "date" : "3"
},{
  "score": 60,
  "date" : "3"
}, {
  "score": 92,
  "date" : "3"
}]

function getOrderList(array, key1, key2) {
  return array.sort(function(a, b) {
    return a[key1] < b[key1] ? 1 : (a[key1] === b[key1] ? (a[key2] < b[key2] ? 1 : -1) : -1);
  });
}
getOrderList(arr, 'date', 'score')
```

#### 二十六、快速排序：quick-sort.js
```js
function quicksort(arr)
{
  if (arr.length == 0)
      return [];
  var left = new Array();
  var right = new Array();
  var pivot = arr[0];
  for (var i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
          left.push(arr[i]);
      } else {
          right.push(arr[i]);
      }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}
```

#### 二十五、希尔排序：shell-sort.js
缩小增量排序
```js
function shellSort(arr) {
    var N = arr.length;
    var h = 1;
    var i, j, v;
    while (h < N / 3) {
        h = 3 * h + 1; // ①
    }
    while (h >= 1) {
        for (i = 1; i < arr.length; i++) {
            j = i;
            v = arr[j];
            while (j > 0 && arr[j - 1] > v) {
                arr[j] = arr[j - 1];
                j--;
            }
            arr[j] = v;
        }
        h = (h - 1) / 3; // 从①可以保证，肯定能除尽的
    }
    return arr;
}
```

#### 二十四、高效合并数组：array-merge.js
使用归并排序：
```js
function merge(arrLeft, arrRight) {
  var indexLeft = 0,
    indexRight = 0,
    sl = arrLeft.length,
    sr = arrRight.length,
    ret = [];
  while (true) {
    if (indexLeft < sl && indexRight < sr) {
      if (arrLeft[indexLeft] < arrRight[indexRight]) {
        ret.push(arrLeft[indexLeft]);
        indexLeft++;
      } else {
        ret.push(arrRight[indexRight]);
        indexRight++;
      }
    } else {
      if (indexLeft < indexRight) {
        ret = ret.concat(arrLeft.slice(indexLeft));
      } else {
        ret = ret.concat(arrRight.slice(indexRight));
      }
      break;
    }
  }
  return ret;
}
```

#### 二十三、冒泡排序：bubble-sort.js
```js
function bubbleSort(arr) {
    var n = arr.length,
        i = 0,
        temp;
    while(--n) {
        while (i < n) {
            if(arr[i] > arr[i+1]) {
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
            i++;
        }
        i = 0;
    }
    return arr;
}
```

#### 二十二、插入排序：insert-sort.js
```js
function insertSort(arr) {
  for(var i = 1, j; i < arr.length; i++) {
    j = i;
    v= arr[j];
    while(arr[j-1] > v) {
        arr[j] = arr[j-1];
        j--;
        if(j === 0) {
            break;
        }
    }
    arr[j] = v;
  }
  return arr;
}
insertSort([2,4,5,49,63,4,5,55,2,4,43])//[2,2,4,4,4,5,5,43,49,55,63]
```

#### 二十一、二进制转换：transform-binary.js
```js
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
```

#### 二十、字符出现次数：string-count.js
求一个字符串中出现最多的字符，以及该字符出现的次数
```js
function stringCount(str) {
  let flag = new Set(str.split(''));
  let arr = str.split('');
  let obj = {
    count: 0,
    val: ''
  }

  flag.forEach(item => {
    let len = arr.filter((val, index, array) => {
      return val === item;
    }).length;

    if (len > obj.count) {
      obj = {
        count: len,
        val: item
      }
    }
  })

  return `出现最多的字符是：${obj.val}，共出现 ${obj.count} 次`;
  
}

stringCount('jartto, helloo worldd!'); // 出现最多的字符是：o，共出现 4 次
stringCount('aabbbc'); // "出现最多的字符是：b，共出现 3 次"
```


#### 十九、求根号值：sqrt.js
```js
function sqrtNum(num) {
    let x1 = num;
    let x2 = num / 2;
    while(Math.abs(x1 - x2) > 0.00000001)
    {
        x1 = x2;
        x2 = (x1 + num / x1) / 2;
    }
    return x1;
}

sqrtNum(2); // 1.4142135623746899
```

#### 十八、对0，1，2简单数组进行高效排序：sort-on.js
对只包含 0、1、2 三种元素的数组进行排序，时间复杂度：O(n)
```js
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
```

#### 十七、单例：single.js
```js
const LazySingle = (function(){
  let _instance = null;
  function Single() {
    return {
      publicMethod: function(){
        console.log('Hello, Jartto!');
      },
      publicProperty: '1.0'
    }
  }
  return function() {
    if(!_instance) {
      _instance = Single();
    }
    return _instance;
  }
})();

LazySingle().publicMethod(); // Hello, Jartto!
```

#### 十六、自除数：self-dividing-number.js
自除数是指可以被它包含的每一位数除尽的数。
例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。
```js
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
```

#### 十五、直接选择排序：selection-sort.js
```js
const selectionSort = (arr) => {
    var ret = [],
        min,
        i;
    while(arr.length) {
        min  = Math.min.apply(null, arr);
        ret.push(min);
        arr.splice(arr.indexOf(min), 1);
    }
    return ret;
}

selectionSort([5, 3, 6, 2, 10]);
```

#### 十四、求数组第二大：secondMax.js
```js
function secondMax(arr) {

}

secondMax([1, 2, 3, -1, 0, 5]);
```

#### 十三、求 m－n 之间的质数：prime-number.js
```js
function primeNumber(m, n) {
  let sum = 0;
  let arr = [];
  for(let i = m; i < n; i++) {
    sum = 0;
    for(let j = 0; j < 100; j++) {
      if (i % j == 0) {
        sum++;
      }
    }
    if(sum == 2) {
      arr.push(i);
    }
  }
  return arr;
}
primeNumber(1, 50);
```

#### 十二、判断是否为一比特字符：one-bit.js
```js
// 输入: 
// bits = [1, 0, 0]
// 输出: True
// 解释: 
// 唯一的编码方式是一个两比特字符和一个一比特字符。所以最后一个字符是一比特字符。

// 输入: 
// bits = [1, 1, 1, 0]
// 输出: False
// 解释: 
// 唯一的编码方式是两比特字符和两比特字符。所以最后一个字符不是一比特字符。
var isOneBitCharacter = function(bits) {
  let len = bits.length;
  for(let i = 0; i< len; i++) {
      if(bits[i] === 1) {
          i++;
      } else if(i === len - 1) {
          return true;
      }
  }
  return false;
};
```



#### 十一、转义摩尔斯密码：morse-code.js
```js
// 转义摩尔斯密码
let uniqueMorseRepresentations = function(words) {
  let abc = 'abcdefghijklmnopqrstuvwxyz';
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
  let res = [];
  for(let i = 0; i < words.length; i++) {
      let str = '';
      for(let j = 0; j < words[i].length; j++) {
        str += morse[[...abc].indexOf(words[i][j])];
      }
      res.push(str);
  }
  
  return new Set(res).size;
};
uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]);
```

#### 十、合并两个二叉树：merge-tree.js
合并的规则是如果两个节点重叠，那么将他们的值相加作为节点合并后的新值，否则不为 `NULL` 的节点将直接作为新二叉树的节点。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let mergeTrees = function(t1, t2) {
  if(t1 === null) return t2;
  if(t2 === null) return t1;
  
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  
  return t1;
};
```


#### 九、求数组最大值索引：max-index.js
直接遍历，或者使用二分查找
```js
var peakIndexInMountainArray = function(A) {
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
peakIndexInMountainArray([0, 1, 0]); // 1
```


#### 八、求字符串最长子串：long-str.js
```js
// 求字符串最长子串
function longstr(str) {
  let temp = {
    str: '',
    max: ''
  }
  let arr = [];
  if (!str) return;
  for(let i = 0; i < str.length; i++) {
    if (!arr.includes(str[i])) {
      arr.push(str[i]);
      temp.str += str[i];
      temp.max = temp.str.length > temp.max.length ? temp.str : temp.max;
    } else {
      arr = [];
      temp.str = [];
    }
  }
  return `最长子串为：${temp.max}，长度为：${temp.max.length}`;
}

longstr('abcddefghijkllllmn'); // 最长子串为：efghijkl，长度为：8
```

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
4.通过 `toString`
```js
function flatten(arr){
  return arr.toString().split(',').map(function(item){
       return parseInt(item);
   })
}    

flatten([1, 2, 3, 4, [5, 6], 7]);
```