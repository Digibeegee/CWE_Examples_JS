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
