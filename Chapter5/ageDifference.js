var ancestry = require('./ancestry');

var byName = {};
ancestry.forEach(function(person) {
 byName[person.name] = person;
});

function average(array) {
  return array.reduce(function (a, b) { return a + b; }) / array.length;
}

var ageDifference = ancestry.map(function(person) {
  var mother = byName[person.mother];
  if (typeof mother != 'undefined') {
    return person.born - mother.born;
  }
});

ageDifference = ageDifference.filter(function (e) {
  return e;
});

var avarageAgeDifference = average(ageDifference);

console.log(avarageAgeDifference);
