var ancestry = require('./ancestry');

function overNinty(p) {
  if (p.died - p.born > 90) {
    return p;
  }
}
var peopleOverNinty = ancestry.filter(overNinty);

function averageByCentury(olderPeople) {
  var centuries = olderPeople.map(function (person) {
    return Math.ceil(person.died / 100);
  });
  return centuries;
}

var centuries = averageByCentury(peopleOverNinty);

function groupBy(centuries) {
  var groupByCenturies = centuries.reduce(function (prev, next) {
    if (typeof prev[next] == 'undefined') {
      prev[next] = 1;
    } else {
      prev[next] += 1;
    }

    return prev;
  }, {});
  return groupByCenturies;
}

console.log(groupBy(centuries));
