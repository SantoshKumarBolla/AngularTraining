import { Account }  from "./modules/account";
import { SavingsAccount }  from "./modules/savingsAccount";
import { CurrentAccount }  from "./modules/currentAccount";

//let acc: Account = new Account(101, "Mini", 2000);
//let acc: Account = new SavingsAccount(102, "Donald", 3000);
let acc: Account = new CurrentAccount(103, "Archie", 5000, 2000);
acc.display();
// console.log("Depositing 200 to the Account");
// acc.deposit(200);
// console.log(`New Balance: ${acc.Balance}`);
console.log("Withdraw 200 to the Account");
acc.withdraw(3000);
//acc.Balance = 2000;
console.log(`New Balance: ${acc.Balance}`);

