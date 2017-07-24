import { IFly, ICarry, IFlyCarry, Bird, Plane, Missile } from "./interfaces/interfaceDemo";

let bird: Bird = new Bird();
console.log(bird.fly);

let carry: ICarry = new Plane();
console.log(carry.Carry());

let missile: IFlyCarry = new Missile();
console.log(missile.fly());
console.log(missile.Carry());