class Animal {
    constructor(name, sound, type) {
        this.name = name;
        this.sound = sound;
        this.type = type;
    }


    speak() {
        if (this.type === "") {
            console.log(`${this.name} says ${this.sound}`);
        } else {
            console.log(`${this.name} the ${this.type} says ${this.sound}`);
        }
    }

}

class Dog extends Animal {
    constructor(name) {
        super(name, 'woof', 'dog');
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name, 'meow', 'cat');
    }
}

class Cow extends Animal {
    constructor(name) {
        super(name, 'moo', 'cow');
    }
}

class AlienAnimal extends Animal {
    constructor(name, sound) {
        super(name, sound, "");
    }
}

class Alien extends AlienAnimal {
    constructor(name) {
        super(name, 'beep');
    }
}

// Create instances of each animal class
const fido = new Dog('Danny');
const rover = new Dog('Rover');
const rex = new Dog('Rex');
const whiskers = new Cat('Claire');
const mittens = new Cat('Mittens');
const tiger = new Cat('Tiger');
const bessie = new Cow('Charles');
const daisy = new Cow('Daisy');
const buttercup = new Cow('Buttercup');
const zorg = new Alien('Andy');
const zax = new Alien('Zax');
const zim = new Alien('Zim');

fido.speak();
rover.speak();
rex.speak();
whiskers.speak();
mittens.speak();
tiger.speak();
bessie.speak();
daisy.speak();
buttercup.speak();
zorg.speak(); 
zax.speak();
zim.speak();
