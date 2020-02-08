var a = [2,4,5,49,63,4,5,55,2,4,43];
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
console.log(quicksort(a));