"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const currentAccount_1 = require("./modules/currentAccount");
//let acc: Account = new Account(101, "Mini", 2000);
//let acc: Account = new SavingsAccount(102, "Donald", 3000);
let acc = new currentAccount_1.CurrentAccount(103, "Archie", 5000, 2000);
acc.display();
// console.log("Depositing 200 to the Account");
// acc.deposit(200);
// console.log(`New Balance: ${acc.Balance}`);
console.log("Withdraw 200 to the Account");
acc.withdraw(3000);
//acc.Balance = 2000;
console.log(`New Balance: ${acc.Balance}`);
//# sourceMappingURL=bankIndependent.js.map