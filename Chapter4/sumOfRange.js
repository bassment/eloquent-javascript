function range(start, end) {
  var numbersInRange = [];
  var step = Number(arguments[2]);

  if (arguments[2]) {
    for (var i = start; i <= end; i += step) {
      numbersInRange.push(i);
    }
  } else {
    for (var x = start; x <= end; x += 1) {
      numbersInRange.push(x);
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
