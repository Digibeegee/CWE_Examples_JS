import {User} from './User.js'
class MessageBoard {
    post(message, name) {
        console.log(`${message}\n:${name}`);
    }

    read() {
        console.log("Reading messages from bulletin.......");
    }
}

let user1 = new User("Prerona", "pwd123", ["read"]);
if (user1.username === user1.getUsername() && user1.password === user1.getPassword()) {
    console.log("User Verified");

    // no authorization to check authorized access to functionalities

    let obj = new MessageBoard();
    obj.read();
    obj.post("Attacker can exploit this weakness", user1.username);