//doesn't work

function fizzbuzz(i){
    try{!(i % 3 && i % 5)}    
    catch(e)
    {
        
        console.log("fizz buzz");
        console.log(" ");
        
    }
    try{!(i % 3)}    
    catch(e)
    {
        console.log("fizz");
        console.log(" ");
        
    }
    try{!(i % 5)}    
    catch(e)
    {
        console.log("buzz");
        console.log(" ");
        
    }
    try{!(i % 3 && i % 5)}    
    catch(e)
    {
        console.log(i);
        console.log(" ");
        
    }
}
for(var i = 0; i < 100; i++){
    console.log(i);
    fizzbuzz(i);
}