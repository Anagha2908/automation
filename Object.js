//object is collection of properties
let person = {
    firstName: 'Tim', //object can include string, integers and even methods
    lastName: 'joe',
    age: 24,
    fullName : function () {
        console.log(this.firstName + this.lastName) // inside a object you cannot call it property only with help of this keyword you can call.
    } 
}
console.log(person.lastName) //this and below line will give same output
console.log(person['lastName']) //here lastname is used as index value

// to assign any value in object
person.firstName = "shubham"
console.log(person.firstName) // if the firstname property already exist so it will go and update the value.
person.gender = "male"
console.log(person.gender) // the gender property didnt exist but it got created here.
delete person.gender // to delete a property from object this delete keyword is used.
console.log(person.gender) // output will be undefined.

console.log("gender" in person) // to check if gender property is there in person object.
// output is false

for (let key in person) // enhanced for loop to print ever thing in an object
{                         // key is actually the properties of object it pick one by one and prints
    console.log(person[key])
}