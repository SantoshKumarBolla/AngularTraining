"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const interfaceDemo_1 = require("./interfaces/interfaceDemo");
let bird = new interfaceDemo_1.Bird();
console.log(bird.fly);
let carry = new interfaceDemo_1.Plane();
console.log(carry.Carry());
let missile = new interfaceDemo_1.Missile();
console.log(missile.fly());
console.log(missile.Carry());
//# sourceMappingURL=interDemo.js.map