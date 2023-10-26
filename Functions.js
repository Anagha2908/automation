//block or code
var greet = "morning 1" //the scope of this var is global
function add(a,b) 
{
    return a+b
}

let sum = add(2,3)
console.log(sum)

//do not have name => Anonymous functions -- function expression
   

let sumofinteger = function(c,d)
    {
        var greet = "morning"  //the scope of var keyword is insdie this function only,
        // it will die outside this function, the scope of this var is inside this function.
        return c + d
    }

    let sumofNumber = ( c,d )=>c+d  // => this symbol is called fat pipe and use to represent anonymous function.
    //means you dont need to write function keyword here only here (c,d)will work, => is representation of function keyword.
    console.log(sumofNumber(2,3))

    console.log(greet)

// var keyword scope - global level/ functional
// let keyword scope - global level/block level { }
// const keyword cant be re initialized so it will through an error if the statement is const greet= "evening" , greet = "morning"


