// 实现数组全排列
function permutationArray(arr) {
  if (!Array.isArray(arr)) {
    console.error('请输入数组类型参数！');
    return;
  }
  let len = arr.length;
  if (len === 1) {
    return arr;
  } else if(len === 2) {
    return [[arr[0],arr[1]],[arr[1],arr[0]]];
  } else {
    let tempArr = [];
    for (let i = 0; i < len; i++) {
      let save = arr[i];
      // 取 arr[i]
      arr.splice(i, 1);
      // 递归排列arr[0],arr[1],...,arr[i-1],arr[i+1],...,arr[n]
      let result = permutationArray(arr);
      // 将 arr[j] 放入数组，保持原来的位置
      arr.splice(i, 0, save);
      for (let j = 0; j < result.length; j++) {
        result[j].push(arr[i]);
        // 将 arr[j] 拼起来起来
        tempArr.push(result[j].join(''));
      }
    }
    return tempArr.sort();
  }
}

console.log(permutationArray([1, 2, 3])); // ['123','132','213','231','321','312']