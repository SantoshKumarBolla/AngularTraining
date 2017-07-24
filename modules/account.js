"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Account {
    constructor(accountNumber, holdersName, balance) {
        this._accountNumber = accountNumber;
        this._holdersName = holdersName;
        this._balance = balance;
    }
    get AccountNumber() { return this._accountNumber; }
    get HoldersName() { return this._holdersName; }
    set HoldersName(value) { this._holdersName = value; }
    get Balance() { return this._balance; }
    set PBalance(value) { this._balance = value; }
    display() {
        console.log(`Account Number: ${this._accountNumber}, HoldersName: ${this._holdersName} and Balance: ${this._balance}`);
    }
    deposit(amount) { this._balance += amount; }
    withdraw(amount) { this._balance -= amount; }
}
exports.Account = Account;
//# sourceMappingURL=account.js.map