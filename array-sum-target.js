/*
 * @Author: Jartto
 * @Date: 2021-03-12 19:28:36
 * @LastEditTime: 2021-03-13 23:55:05
 */

// 求两个数组中元素的和等于定值的组合
// 例如数组1：[1, 6, 2, 3, 5, 9]
// 数组2：[2, 8, 4, 5, 1]
// 求等于和等于10的组合

// 方式一：穷举，O(N^2)
const sumTarget = (arr1, arr2, target) => {
    let temp = [];
    arr1.forEach(element => {
        arr2.forEach(item => {
            if (element + item === target) {
                temp.push([element, item]);
            }
        })
    });
    return temp;
}

sumTarget([1, 6, 2, 3, 5, 9], [2, 8, 4, 5, 1], 10);


// 方式二：排序 O(NlogN)，遍历复杂度为O(N)
const sumTarget2 = (arr1, arr2, target) => {
    let temp = arr1.concat(arr2).sort((a, b) => a - b);
    let left = 0;
    let right = temp.length - 1;

    let result = [];
    while (left < right) {
        if (temp[left] + temp[right] > target) {
            right--;
        } else if (temp[left] + temp[right] < target) {
            left++;
        } else {
            result.push([temp[left], temp[right]]);
            left++;
            right--;
        }
    }
    return result;
}

sumTarget2([1, 6, 2, 3, 5, 9], [2, 8, 4, 5, 1], 10);