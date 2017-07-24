console.log("Welcome to TypeScript Banking");
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
    set Balance(value) { this._balance = value; }
    display() {
        console.log(`Account Number: ${this._accountNumber}, HoldersName: ${this._holdersName} and Balance: ${this._balance}`);
    }
}
let acc = new Account(10, "Tintin", 2000);
acc.display();
//# sourceMappingURL=bankSelf.js.map