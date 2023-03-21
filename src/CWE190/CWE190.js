function increment(a) {
  return a + 1;
}

const obj = {
  increment: increment
};

let a = 90;
console.log(obj.increment(a));
console.log(obj.increment(Number.MAX_VALUE));
console.log(Number.MIN_VALUE - 1);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
