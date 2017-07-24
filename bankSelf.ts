console.log("Welcome to TypeScript Banking");

class Account{
    private _accountNumber: number;
    private _holdersName: string;
    private _balance: number;

    constructor(accountNumber, holdersName, balance){
        this._accountNumber = accountNumber;
        this._holdersName = holdersName;
        this._balance = balance;
    }

    public get AccountNumber() { return this._accountNumber;}

    public get HoldersName() { return this._holdersName; }
    public set HoldersName(value) { this._holdersName = value; }

    public get Balance() {return this._balance;}
    public set Balance(value) { this._balance = value; }

    display(){
        console.log(`Account Number: ${this._accountNumber}, HoldersName: ${this._holdersName} and Balance: ${this._balance}`);
    }
}

let acc: Account = new Account(10, "Tintin", 2000);
acc.display();