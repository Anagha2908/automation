//block or code

function add(a,b) 
{
    return a+b
}

let sum = add(2,3)
console.log(sum)

//do not have name => Anonymous functions -- function expression
   

let sumofinteger = function(c,d)
    {
        var greet = "morning"  //the scope of var keyword is insdie this function only it will die outside this function
        return c + d
    }

    let sumofNumber = ( c,d )=>c+d  // => this symbol is called fat pipe and use to represent anonymous function.
    //means you dont need to write function keyword here only here (c,d)will work, => is representation of function keyword.
    console.log(sumofNumber(2,3))

    