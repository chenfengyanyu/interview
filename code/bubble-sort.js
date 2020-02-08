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