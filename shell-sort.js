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