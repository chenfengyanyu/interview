/**
 * @msg: 直接选择排序
 * @param {Array} arr
 * @return: Array
 */
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