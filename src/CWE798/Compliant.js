class Constant {
    static get admin_password() {
        return "pwd1234";
    }
}

function VerifyAdmin(password) {
        if (password === Constant.admin_password) {
            console.log("Admin Verified! Welcome.");
            return true;
        }
        console.log("Access Denied");
        return false;
}

VerifyAdmin("pwd1234");