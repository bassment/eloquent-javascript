var string = "";
var line = 1;
var size = 8;

for (var i = 1; i <= size * size; i += 1) {
  if (line % 2 === 0) {
    if (i % 2 === 0) {
      string += "#";
    } else {
      string += " ";
    }
  } else {
    if (i % 2 === 0) {
      string += " ";
    } else {
      string += "#";
    }
  }
  if (i % size === 0) {
    string += "\n";
    line += 1;
  }
}

console.log(string);
