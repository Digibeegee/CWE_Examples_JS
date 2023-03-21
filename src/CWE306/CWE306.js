class BankAccount {
    constructor() {
        this.accountNumber = "";
        this.accountType = "";
        this.accountName = "";
        this.balance = 0;
    }

    setAccountNumber(accNo) {
        this.accountNumber = accNo;
    }

    setAccountType(accType) {
        this.accountType = accType;
    }

    setAccountOwnerName(accName) {
        this.accountName = accName;
    }

    setBalance(bal) {
        this.balance = bal;
    }

    getOwnerName() {
        console.log(this.accountName);
    }
}

function createBankAccount(accountNumber, accountType, accountOwnerName, balance) {
    let account = new BankAccount();
    account.setAccountNumber(accountNumber);
    account.setAccountType(accountType);
    account.setAccountOwnerName(accountOwnerName);
    account.setBalance(balance);

    return account;
}

//no authentication of user being able to create account
let user1 = createBankAccount("987", "Savings", "Owner", 1000);
user1.getOwnerName();
