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

    //only checks for cases of too large value and no other possibilities like null,0 etc
    if (width > MAX_SIZE || height > MAX_SIZE) {
      console.log("Value too large: Die evil hacker!");
    }
    let board = new Array(width).fill().map(() => new Array(height).fill(0));
    rl.close();
  });
});
