function average(array) {
  return array.reduce(function (a, b) { return a + b; }) / array.length;
}

function age(p) { return p.died - p.born; }
function male(p) { return p.sex === 'm'; }
function female(p) { return p.sex === 'f'; }

console.log(average(ancestry.filter(male).map(age)));
console.log(average(ancestry.filter(female).map(age)));
