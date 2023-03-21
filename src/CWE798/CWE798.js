//Harcoded credentials
function VerifyAdmin(password) {
    if (password === "pwd1234") {
        console.log("Admin Verified! Welcome.");
        return true;
    }
    console.log("Access Denied");
    return false;
}

VerifyAdmin("pwd1234");