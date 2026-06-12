const person = {
  name: "Amit",
  age: 28
};

console.log(person.name); // Output: Amit
person.city = "Bhubaneswar";

console.log(person.age)

const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person1.fullname)