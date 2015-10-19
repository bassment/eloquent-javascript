function deepEqual(a, b) {
  if (a === b) return true;

  if (a === null || typeof a != 'object' || b === null || typeof b != 'object') {
    return false;
  }

  var propsInA = 0, propsInB = 0;

  for (var prop in a) {
    propsInA += 1;
  }

  for (var property in b) {
    propsInB += 1;
    if (!(property in a) || !deepEqual(a[property], b[property])) {
      return false;
    }
  }
  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));