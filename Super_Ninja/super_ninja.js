class Ninja {
    constructor(name, health = 0, speed = 3, strength = 3){
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

class Sensei extends Ninja {
    constructor(name){
        super(name);
        super.health = 200;
        super.speed = 10;
        super.strength = 10;
        this.wisdom = 10;
    }

    spitsWisdom() {
        this.drinkSake()
        console.log(` ${this.name} takes a sip of his sake: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."`)
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.spitsWisdom();
superSensei.showStats();

