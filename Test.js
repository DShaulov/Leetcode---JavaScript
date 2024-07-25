class Animal {
    constructor(name) {
        this.name = name;
    }
    talk() {
        console.log("Hello my name is " + this.name);
    }
}

class Dog extends Animal {
    talk() {
        super.talk();
        console.log("woof");
    }
}

let dog = new Dog("Harry")
dog.talk();