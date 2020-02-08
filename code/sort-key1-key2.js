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
getOrderList(arr, 'date', 'score');