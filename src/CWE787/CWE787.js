//Out of Bounds Write

let a = new Array(5);
//attempts to write out of bounds in final iteration

for(let i = 0; i <= 5; i++) {
    a[i] = i * 10 + (i - 1);
    console.log(a[i]);
}
