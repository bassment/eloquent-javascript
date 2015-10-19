function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++) {
    mapped.push(transform(array[i]));
  }
  return mapped;
}

var overNinty = ancestors.filter(function (person) {
  return person.died - person.born > 90;
});

console.log(map(overNinty, function (person) {
  return person.name;
}));
