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