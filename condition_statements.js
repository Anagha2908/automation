const flag=true

if(!flag) // else statment will be printed
{
    console.log("condition satisfied")
}
else
{
    console.log(flag)
    console.log("condition not satisfied")
}

console.log("*******************************************************************")

let i=0
while(i>10) // condition false
{
    i++
    console.log(i)
}
 // i value now goes to next loop 
do
{
i++
}while(i>10) ;// always end while loop with semi colon
console.log(i)

console.log("**********************************************************************")

for(let k=0; k<10; k++) // forloop , you cannot give 
{
    console.log(k)
}

console.log("********************************************************************")

let n =0 
for(let f = 1; f<=100; f++)
{
    if(f%2 ==0 && f%5 ==0)
    {
        n++
        console.log(f)
        if(n==3)    
        break
    }
}

