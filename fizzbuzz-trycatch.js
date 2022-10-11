//doesn't work
function tryy(x, y)
{
    try
    {x || throwexception}
    catch(e)
    {
        y;
    }
}
for(var i = 0; i < 100; i++){
    tryy(!(i % 3 && i % 5), console.log("fizz buzz"));
    tryy((!i % 3), console.log("fizz"));
    tryy(!(i % 5), console.log("buzz"));
    tryy((i % 3 && i % 5), console.log(i));
}
// for(var i = 0; i < 100; i++){
//     try{!(i % 3 && i % 5) || throwexception}    
//     catch(e)
//     {       
//         console.log("fizz buzz");
//         console.log(" ");
//         i++;        
//     }
//     try{!(i % 3) || throwexception}    
//     catch(e)
//     {
//         console.log("fizz");
//         console.log(" ");        
//     }
//     try{!(i % 5) || throwexception}    
//     catch(e)
//     {
//         console.log("buzz");
//         console.log(" ");       
//     }
//     try{(i % 3 && i % 5) || throwexception}    
//     catch(e)
//     {
//         console.log(i);
//         console.log(" ");    
          
//     }
    //}