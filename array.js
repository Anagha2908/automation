var marks =Array(6)
var marks = new Array(20, 40, 35, 14, 37, 100)
var marks = [20, 40, 35, 14, 37, 100]
subMarks = marks.slice(2,5) // slices the array from 2nd idex to 5th index here [35,14,37]
console.log(subMarks)
console.log(marks[2]) // 35
marks[3] = 14 // to change 3rd index position with another item in array
console.log(marks) // [20, 40, 35, 14, 37, 100]
console.log(marks.length) //6
marks. push(65) // use to add new item at end in an array // [20, 40, 35, 14, 37, 100, 65]
console.log(marks) // [20, 40, 35, 14, 37, 100, 65]
marks.pop() // used to remove added item at the end. // [20, 40, 35, 14, 37, 100]
marks. unshift(12) // used to add item in the beginning of array
console.log(marks) // [12, 20, 40, 35, 14, 37, 100]
console.log(marks.indexOf(100)) // prints index value of item
console.log(marks.includes(35)) // prints and checks if the item mentioned is in the array
var sum =0
for(let i =0;i<marks.length;i++) 
//console.log(marks[i])
sum = sum + marks[i] // 32+40
console.log(sum)
// reduce filter map ( reduce method use to perform operations on all elements of an array )
let total =marks.reduce((sum,mark)=>sum+mark,0)
console.log(total)

var scores = [12,13,14,15,16]
//create new array with even numbers of scores array [12,14,16]
var evenScores = []
for(let i =0;i<scores.length;i++)
{
  if(scores[i]%2==0) 
   {
      evenScores.push(scores [i])
   }
}
console.log(evenScores)
let newFilterEvenScores = scores.filter(score=>score%2==0) // does the same thing which is done in previous for loop.
console.log(newFilterEvenScores) // [12,14,16]

//map function used to modify each and every element in an array.
//like //create new array with even numbers of scores and multiply each value with 3 
let MappedArray = newFilterEvenScores.map(score=>score*3)
console.log(MappedArray)

let totalVal=MappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)

var scores1 = [12,13,14,16]
let sumValue=scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValue) //chaining

//sorting
let fruits =["banana" , "mango" , "pomogrante" , "apple"]
fruits.sort()   //sorts array according to alphabets
fruits.reverse() //sorts in reverse order
console.log(fruits)

var scores2 = [12,3,16,18,14]
console.log(scores2.sort())
scores2.sort(function(a,b){  
return a-b
})


