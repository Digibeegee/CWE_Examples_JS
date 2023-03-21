class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  getPassword() {
    return this.password;
  }

  getUsername() {
    return this.username;
  }

  validatePassword(pwd) {
    return pwd === this.getPassword();
  }
}

let admin = new User("Admin", "pwd#0987");
let readline = require("readline-sync");
let password = readline.question("Enter Password: ");

//adding maximum attempt limit so attacker cannot use brute force to guess password
const maxAttempts = 3;
let attempt = 0;
while (!admin.validatePassword(password) && attempt < maxAttempts) {
  console.log("Wrong Password! Try Again");
  attempt++;
  password = readline.question("Enter Password: ");
}

if (attempt >= maxAttempts) {
  console.log("Account has been locked!");
} else {
  console.log(`Welcome ${admin.getUsername()}`);
}
