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

//no checking of maximum attempts gives attacker adequete time to guess password by brute force

while (!admin.validatePassword(password)) {
  alert("Wrong Password! Try Again");
  password = prompt("Enter password");
}
