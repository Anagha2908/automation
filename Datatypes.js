console.log(" Hello World ")

// console.log is used to print anything in java script.
// variable are losely store in js, no need to give data type or return type in js.
// to declare any variable in js we need to use "let" keyword.
// we need to save the code before running each time.

let a=4  // declaration of v'a' variable // (data type 'number')
console.log(a) // to print alue a 'a' variable.
console.log(typeof(a)) // use 'typeof' to get the exact data type of varibale to be printed in console.

let b=3242.2
console.log(typeof(b)) // (data type 'number')
// in js there is no data types like int, float they all are counted as 'number' type.
 let c="Shubham Bundele"
 console.log(typeof(c))
 
 let d=10;

 //npm install nodemon -g --save (nodemon is package, -g is short for of --global, '--' is type to use full word and '-' is used to type shortcuts)

 let required = true // data type is 'boolean' i.e 'true or false'
 console.log(typeof(required)); 
 console.log(required) // Output will be true
 console.log(!required) // '!' mark is added to to convert ture into false. 


 // 'null' data type :- if we store null value in any variable.
 //'undefined' data type :- if you dont create or assign any value to the variable.
 //let c=a+b (this will not work as 'let' keyword is used,we cannot redeclare same variable with 'let')
 //var c=a+b (this will work) //  both redeclaring and re assigning are possible with 'var'keyword.
 d=a+b // only reassigning is possible with 'let' keyword but re declaring is not possible.
 console.log(d) 
 const e=23 // do declare any data constant in whole script 'const' is used
 // e=a+b (this is not possible as we are reassigning to constant variable)
 console.log(e) //const<<let<<var
 