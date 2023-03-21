import {User} from './User.js'
class MessageBoard {
    post(message, name) {
        console.log(message + "\n:" + name);
    }

    read() {
        console.log("Reading messages from bulletin.......");
    }
}

const user1 = new User("Prerona", "pwd123", ["read"]);

if (user1.username === user1.getUsername() && user1.password === user1.getPassword()) {
    console.log("User Verified");

    const obj = new MessageBoard();
    obj.read();

    if (user1.permissions.includes("write")) {
        obj.post("User is authorized to post messages on board! Crisis averted!", user1.username);
    } else {
        console.log("Write Access not available for user:" + user1.username);
    }
}