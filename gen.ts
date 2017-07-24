import { GenTool, Concatenator, Person } from "./generics/genTools";

let gTool: GenTool = new GenTool();

console.log("The Sum of 10 and 20 is: " + gTool.AddNumbers(10, 20));
console.log(`The Sum of 10+20+30+40+50+60 is: ${gTool.AddNumbers(10, 20, 30, 40, 50, 60)}`);

let strArray: string[] = ["Mickey", "Mouse", "Peter", "Parker"];
let conStr: Concatenator<string> = new Concatenator<string>();
console.log(conStr.contactenateArray(strArray));

let numArray: number[] = [89, 10, 30];
let conNum: Concatenator<number> = new Concatenator<number>();
console.log(conNum.contactenateArray(numArray));

let personArray:Person[] = [new Person("Mickey", 12), new Person("Donald", 21), new Person("Goofy", 7)];
let conPerson: Concatenator<Person> = new Concatenator<Person>();
console.log(conPerson.contactenateArray(personArray));