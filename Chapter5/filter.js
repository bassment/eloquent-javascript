function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if(test(array[i])) {
      passed.push(array[i]);
    }
  }
  return passed;
}

console.log(filter(ancestors, function (person) {
  return person.born > 1900 && person.born < 1925;
}));
