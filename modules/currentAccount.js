"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const account_1 = require("./account");
class CurrentAccount extends account_1.Account {
    constructor(accountNumber, holdersName, balance, odLimit = 0) {
        super(accountNumber, holdersName, balance);
        this._odLimit = odLimit;
    }
    withdraw(amount) {
        if (((this.Balance + this._odLimit) - amount) < 0) {
            console.log("Insufficient funds.... CA");
            return;
        }
        this.PBalance = (this.Balance - amount);
    }
}
exports.CurrentAccount = CurrentAccount;
//# sourceMappingURL=currentAccount.js.map