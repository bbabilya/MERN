class Ninja {
    constructor(name, health, speed = 3, strength = 3){
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    
    sayName() {
        console.log(`This ninja's name is ${this.name}`);
    }

    showStats() {
        console.log(this);
    }

    drinkSake() {
        this.health += 10;
    }
}

let newNinja = new Ninja("Hayabusa", 100);
newNinja.showStats()
newNinja.drinkSake()
newNinja.showStats();