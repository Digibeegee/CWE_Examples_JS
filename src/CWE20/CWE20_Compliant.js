const MAX_SIZE = 100;
let width, height;
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter width: ', (w) => {
  rl.question('Enter height: ', (h) => {
    width = parseInt(w);
    height = parseInt(h);

    //checking for null, max size and 0
    if (width && height) {
      if (width > MAX_SIZE || height > MAX_SIZE || width === 0 || height === 0) {
        console.log("Value invalid: Die evil hacker!");
      }
      let board = new Array(width).fill().map(() => new Array(height).fill(0));
    }
    else {
        console.log("Value invalid: Die evil hacker!");
    }
    rl.close();
  });
});
