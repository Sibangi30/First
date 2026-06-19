
function Person(name, age) {
  this.name = name;
  this.age = age;
}


let person1 = new Person("Alice", 25);
let person2 = new Person("Bob", 30);

console.log(person1.name); 
console.log(person2.age);  
Person.prototype.greet = function() {
  console.log("Hello, my name is " + this.name);
};

person1.greet(); 
person2.greet(); 


