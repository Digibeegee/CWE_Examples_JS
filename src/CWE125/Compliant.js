const arr = [-1, 2, -3, 4, -5];

function getValue(ele) {
  return arr[ele];
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function readIndex() {
  rl.question('Enter index to read: ', (ele) => {
    if (ele >= 0 && ele < arr.length) {
      console.log(getValue(ele));
    } else {
      console.log('Invalid index');
    }
    rl.question('Read more? (y/n): ', (answer) => {
      if (answer === 'y') {
        readIndex();
      } else {
        rl.close();
      }
    });
  });
}

readIndex();
