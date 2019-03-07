// 方式一
function deepClone(obj){
  return JSON.parse(JSON.stringify(obj));
}   

let arr1 = [1, 2, 3],
    arr2 = deepClone(arr1);

arr1.push(4);
console.log(arr1, arr2); // [1,2,3,4], [1,2,3]

// 方式二
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

