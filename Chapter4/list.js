function arrayToList(arr) {
  var list = null;
  for (var i = arr.length - 1; i >= 0; i--) {
    list = {value: arr[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(element, list) {
  return {value: element, rest: list};
}

function nth(list, possition) {
  var counter = 0;
  var valueAtPossition;
  for (var node = list; node; node = node.rest) {
    if (counter == possition) {
      valueAtPossition = node.value;
    }
    counter++;
  }
  return valueAtPossition;
}

function nth_recursive(list, n) {
  if (!list) {
    return undefined;
  } else if (n === 0) {
    return list.value;
  } else {
    return nth_recursive(list.rest, n - 1);
  }
}

console.log(arrayToList([10, 20]));
console.log(listToArray(arrayToList([1, 25, 45])));
console.log(prepend(10, prepend(35, null)));
console.log(nth_recursive(arrayToList([10, 20, 30, 40]), 3));
