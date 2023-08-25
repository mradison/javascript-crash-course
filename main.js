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


//variables
var name = '25'
var age = 25
var happy =false
//functions
function add(){
    return 1+1
}

// for loops
/*
for = we are starting some kind of loop
() = inside is where all the options are going to go in
var i = 0; = we are creating a variable that we will use to check if we should continue the loop
i<5; = this is the condition to check whether or not to continue the loop
i++ = after we ran this iteration of the loop, do something with the looping variable
{} = whatever is inside the curlys will be the code that executed for each iteration
*/

for (var i = 0; i< 3; i++){
    //executables
    console.log(i)
}


for (let i = 10; i> 0; i--){
    console.log('hello');
}
var arr = [2001, 1967, 1997]
console.log(arr[0])
for (let i = 0; i< arr.length; i++){
    console.log(arr[i])
} 