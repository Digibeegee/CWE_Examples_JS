//checking index before write is attempted

let a = new Array(5);
for(let i = 0; i <= 5; i++) {
    if (i >= a.length) {
        console.log("Out of Bounds write detected");
        break;
    }
    a[i] = i * 10 + (i - 1);
    console.log(a[i]);
}
