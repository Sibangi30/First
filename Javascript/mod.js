class Person {
    constructor(name) {
        this.name = name; 
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person('Alice');
person.introduce(); 
console.log(person.name); 