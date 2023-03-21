export class User {
    constructor(username, password, permissions) {
        this.username = username;
        this.password = password;
        this.permissions = permissions;
    }

    getPermissions() {
        return this.permissions;
    }

    getPassword() {
        return this.password;
    }

    getUsername() {
        return this.username;
    }
}
