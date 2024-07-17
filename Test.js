const animal = {
    name: 'woof'
}

const dog = Object.create(animal);
dog.bark = function() {
    console.log('I am barking ' + this.name);
}

console.log(dog.bark());
console.log(animal.bark());