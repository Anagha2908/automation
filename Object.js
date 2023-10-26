//object is collection of properties
let person = {
firstName: 'Tim' ,
lastName : 'joe'
}
console.log(person.lastName) //this and below line will give same output
console.log(person['lastName']) //here lastename is used as index value

// to assign any value in object
person.firstName="shubham"
console.log(person.firstName) // if the firstname property already exist so it will go and update the value.
person.gender = "male"
console.log(person.gender) // the gender property didnt exist but it got created here.