function range(start, end) {
  var numbersInRange = [];
  var step = Math.abs(arguments[2]);

  if (arguments[2] >= 0) {
    for (var i = start; i <= end; i += step) {
      numbersInRange.push(i);
    }
  } else if (arguments[2] < 0) {
      for (var x = start; x >= end; x -= step) {
        numbersInRange.push(x);
      }
  } else {
      for (var y = start; y <= end; y += 1) {
        numbersInRange.push(y);
      }
  }
  return numbersInRange;
}

function sum(array) {
  var sumNumbers = 0;
  for (var i = 0; i < array.length; i++) {
    sumNumbers += array[i];
  }
  return sumNumbers;
}

console.log(sum(range(1, 10)));
console.log(range(1, 10, 2));
console.log(range(5, 2, -1));
