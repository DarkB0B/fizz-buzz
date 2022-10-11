//doesn't work idk why


for(var i = 0; i < 100; i++){
    try{(i % 3 && i % 5) || throwexception}    
    catch(e)
    {
        console.log(i);
        console.log(" ");    
        i++;   
    }
    try{!(i % 3 && i % 5) || throwexception}    
    catch(e)
    {       
        console.log("fizz buzz");
        console.log(" ");
        i++;        
    }
    try{(i % 3) || throwexception}    
    catch(e)
    {
        console.log("fizz");
        console.log(" ");        
    }
    try{(i % 5) || throwexception}    
    catch(e)
    {
        console.log("buzz");
        console.log(" ");       
    }
   
}