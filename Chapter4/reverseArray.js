var array = [1, 2, 3, 4, 5];

function reverseArray(array) {
  arr = [];
  for (var i = array.length - 1; i >= 0; i -= 1) {
    arr.push(array[i]);
  }
  return arr;
}

function reverseArrayInPlace(array) {
  for (var i = array.length - 1; i >= 0; i -= 1) {
    var tmp = 0;
    tmp = array[i];
    array.splice(i, 1);
    array.push(tmp);
  }
}

reverseArrayInPlace(array);
console.log(array);
