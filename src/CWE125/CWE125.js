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
    console.log(getValue(ele));
    rl.question('Continue? (y/n): ', (answer) => {
      if (answer === 'y') {
        readIndex();
      } else {
        rl.close();
      }
    });
  });
}

readIndex();
