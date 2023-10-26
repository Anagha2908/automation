let day ="Tuesday " // here day is a string and "" and  '' both can be used to write string 
console.log(day.length) // length method is used to show length of string
console.log(day.slice(0,4)) // slice is used to get a substring from string
console.log(day[4]) // for getting the value of string at particular index
let splitstring = day.split("s") // split method is used to split the string from a particular word into two words,
// not includung the word used to split.
console.log(splitstring) //now if i want only the right portion of splited string use[0]
console.log(splitstring[1].length) // for left side of string use [1]
console.log(splitstring[1].trim().length) //Removes the leading and trailing white space and line terminator characters from a string.

let date ='23' 
let nextDate = '27' //initials considered as string so for calculation you need to convert it to integer
let diff = parseInt(nextDate) - parseInt(date) // parseint Converts a string to an integer.
console.log(diff)
console.log(diff.toString) // tostring - Returns a string representation of an object.

let newquote = day + "is funday" // + is use to concatinate means to add.
console.log(newquote)

let val = newquote.indexOf("day") //shows that the day word starts from 4th index , word is tuesday
console.log(val)

let val1 = newquote.indexOf("day",5) //here there are two "day" in sentence so to select 2nd day index value after 4th is choosen.
console.log(val1)

let count = 0
let value =newquote.indexOf('day')
while(value!== -1)
 {count++ // 2
value=newquote.indexOf("day", value+1)
 }
console.log(count)