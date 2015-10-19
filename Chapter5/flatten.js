var family = ["Carel Haverbeke", "Maria van Brussel", "Donald Duck"];
var friends = ["Jennifer Aniston", "Courteney Cox", "Matthew Perry"];
var nonames = ["Guffy", "Alice", "Micky"];
var familyAndFriendsAndNoNames = [family, friends, nonames];

var partyArray = familyAndFriendsAndNoNames.reduce(function (a, b) {
  return a.concat(b);
});

console.log(partyArray);
