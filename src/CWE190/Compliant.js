function increment(a) {
  if (a < Number.MAX_VALUE) {
    return a + 1;
  }
  console.log("possible number overflow")
  return -1;
}

const obj = {
  increment: increment
};

let a = 90;
console.log(obj.increment(a));
console.log(obj.increment(Number.MAX_VALUE));