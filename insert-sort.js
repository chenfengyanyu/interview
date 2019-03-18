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