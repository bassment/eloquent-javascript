var ancestry = require('./ancestry.js');

function every(array, check) {
  var wisdom;
  for (var i = 0; i < array.length; i++) {
    if (check(array[i])) {
      wisdom = true;
    } else {
      wisdom = false;
      break;
    }
  }
  return wisdom;
}

function some(array, check) {
  var wisdom;
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (check(array[i])) {
      wisdom = true;
      counter++;
      if(counter > 1) break;
    } else {
      wisdom = false;
    }
  }
  return wisdom;
}

function olderThan91(person) {
    var age = person.died - person.born;
    return age > 91;
}

function olderThan5(person) {
    var age = person.died - person.born;
    return age > 5;
}

console.log(every(ancestry, olderThan5));
console.log(some(ancestry, olderThan91));
console.log('From code page:');
console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
