"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const genTools_1 = require("./generics/genTools");
let gTool = new genTools_1.GenTool();
console.log("The Sum of 10 and 20 is: " + gTool.AddNumbers(10, 20));
console.log(`The Sum of 10+20+30+40+50+60 is: ${gTool.AddNumbers(10, 20, 30, 40, 50, 60)}`);
let strArray = ["Mickey", "Mouse", "Peter", "Parker"];
let conStr = new genTools_1.Concatenator();
console.log(conStr.contactenateArray(strArray));
let numArray = [89, 10, 30];
let conNum = new genTools_1.Concatenator();
console.log(conNum.contactenateArray(numArray));
let personArray = [new genTools_1.Person("Mickey", 12), new genTools_1.Person("Donald", 21), new genTools_1.Person("Goofy", 7)];
let conPerson = new genTools_1.Concatenator();
console.log(conPerson.contactenateArray(personArray));
//# sourceMappingURL=gen.js.map