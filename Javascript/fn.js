
const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

const person2 = { firstName: "Anne", lastName: "Smith" };

Object.assign(person1, person2);

console.log(person1);
console.log(person2);
