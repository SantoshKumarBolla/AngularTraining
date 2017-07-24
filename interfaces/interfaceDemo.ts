export interface IFly{
    fly();
}
export interface ICarry{
    Carry();
}
export interface IFlyCarry extends IFly, ICarry{}

export class Bird implements IFly{
    fly() {
        return "Bird fly's with its Wings";
    }
}
export class Plane implements IFly, ICarry{
    fly() {
        return "Plane flies with it Propeller's";
    }
    Carry() {
        return "Plane Carries passangers"
    }
}
export class Missile implements IFlyCarry{
    fly() {
        return "Missile flies with it rocket engine Propeller's";
    }
    Carry() {
        return "Missile Carries Warload's"
    }
}
