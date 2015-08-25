function countChar(str, letter) {
  var count = 0;
  for (var i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === String(letter)) {count += 1;}
  }
  return count;
}

console.log(countChar('BaaBBaaB', 'B'));
console.log(countChar('BaaBbabaaBbaaBB', 'a'));
