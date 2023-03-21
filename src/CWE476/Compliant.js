//checking for available object before calling function on it

let name = null;
if (name != null) {
    console.log(name.length);
} else {
    console.log("Enter value! Length of null object cannot be calculated!!");
}
