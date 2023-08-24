//Constructor Function
function Person (firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}

Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//Instantiate an object
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Mary', 'Doe', '4-15-1980');

console.log(person2.getFullName());
console.log(person1);