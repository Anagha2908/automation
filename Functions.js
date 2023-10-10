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
        return c + d
    }

    let sumofNumber = ( c,d )=>c+d  // => this symbol is called fat pipe and use to represent anonymous function.
    console.log(sumofNumber(2,3))