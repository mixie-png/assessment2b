class Car {
    constructor(fuelLevel) {
        this.fuelLevel = fuelLevel;
        this.speed = 0;
        this.engineOn = false;
    }

    accelerate() {
        if (this.fuelLevel <= 100 && this.speed >= 0) {
            this.fuelLevel--;
            this.speed++;
            return this;
          }
    }
    
    brake() {
        if (this.speed >=0) {
            this.speed--;
            return this;
        }
    }

    turnCarOn() {
        if (this.engineOn === false) {
            this.engineOn = true;
            return this;
        }
    }

    turnCarOff() {
        if (this.engineOn = true) {
            this.engineOn = false;
            this.speed = 0;
            return this;
        }
    }

    refillFuel() {
        if (this.fuelLevel < 100) {
            this.fuelLevel = 100;
            return this;
        }
    }
}

let myCar = new Car(60);

myCar.refillFuel();
// console.log(myCar.refillFuel());

myCar.turnCarOn();
// console.log(myCar.turnCarOn());

myCar.accelerate();
// console.log(myCar.accelerate());

myCar.accelerate();
// console.log(myCar.accelerate());

myCar.accelerate();
// console.log(myCar.accelerate());

myCar.brake();
// console.log(myCar.brake());

myCar.brake();
// console.log(myCar.brake());

myCar.brake();
// console.log(myCar.brake());

myCar.turnCarOff();
// console.log(myCar.turnCarOff());

console.log(myCar);