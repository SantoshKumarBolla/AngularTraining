"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class SavingsAccount extends account_1.Account {
    constructor(accountNumber, holdersName, balance) {
        super(accountNumber, holdersName, balance);
    }
    withdraw(amount) {
        if ((this.Balance - amount) < 500) {
            console.log("Insufficient funds.... SA");
            return;
        }
        this.PBalance = (this.Balance - amount);
    }
}
exports.SavingsAccount = SavingsAccount;
//# sourceMappingURL=savingsAccount.js.map