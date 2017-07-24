import { Account } from "./account";

export class CurrentAccount extends Account
{
    private _odLimit: number;
    constructor(accountNumber: number, holdersName: string, balance: number, odLimit: number = 0){
        super(accountNumber, holdersName, balance);
        this._odLimit = odLimit;
    }

    withdraw(amount: number){
        if(((this.Balance + this._odLimit) - amount) < 0){
            console.log("Insufficient funds.... CA");
            return;
        }        
        this.PBalance = (this.Balance - amount);
    }

}