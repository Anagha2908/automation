let day ="Tuesday " // here day is a string and "" and  '' both can be used to write string 
console.log(day.length) // length method is used to show length of string
console.log(day.slice(0,4)) // slice is used to get a substring from string
console.log(day[4]) // for getting the value of string at particular index
let splitstring = day.split("s") // split method is used to split the string from a particular word into two words,
// not includung the word used to split.
console.log(splitstring) //now if i want only the right portion of splited string use[0]
console.log(splitstring[1].length) // for left side of string use [1]
console.log(splitstring[1].trim().length) //Removes the leading and trailing white space and line terminator characters from a string.