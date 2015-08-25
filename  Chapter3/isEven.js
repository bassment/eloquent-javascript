function isEven(num) {
  num = Math.abs(num);

  if (num === 0) {
    return true;
  }
  else if (num === 1) {
    return false;
  }
  else {
    if (num % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isEven(75));
console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(50));
console.log(isEven(-1));
console.log(isEven(-2));
