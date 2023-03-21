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

function validPan(pan) {
  return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(pan);
}

function createBankAccount(accountNumber, accountType, accountOwnerName, balance, panID) {
  if (!validPan(panID)) {
    console.log("Cannot create account");
    return null;
  }
  
  const account = {
    accountNumber: accountNumber,
    accountType: accountType,
    accountName: accountOwnerName,
    balance: balance,
    setAccountNumber: function(accNo) {
      this.accountNumber = accNo;
    },
    setAccountType: function(accType) {
      this.accountType = accType;
    },
    setAccountOwnerName: function(accName) {
      this.accountName = accName;
    },
    setBalance: function(bal) {
      this.balance = bal;
    },
    getOwnerName: function() {
      console.log(this.accountName);
    }
  };
  
  return account;
}

const user1 = createBankAccount("987", "Savings", "Owner", 1000, "ABCDE1234F");
if (user1 != null) {
  user1.getOwnerName();
}
