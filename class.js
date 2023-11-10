module.exports = class Person // to export a class use module.export
{ 
    age = 25

    get location() // get defines that its just a property not a method. used for pom
    {
        return "canada"
    }

    // constructor is method which executes by default when you create object of the class 
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    //method
    fullname1()
    {
        console.log(this.firstname+this.lastname)
    }

}

let person = new Person("shubh","arrow")
let person1 = new Person("shubh","sharma")
console.log(person.age)
console.log(person.location)
console.log(person.fullname1())
console.log(person1.fullname1())
