for(var i = 1; i < 100; i++){
    for(var j = 0; !j && !(i % 3) && !j && !(i % 5); j++) {
        i++ 
        console.log("fizz buzz") 
        console.log(" ");};
    for(var j = 0; !j && !(i % 3); j++) console.log("fizz");
    for(var j = 0; !j && !(i % 5); j++) console.log("buzz");
    for(var j = 0; !j && i % 3 && i % 5; j++) console.log(i);
    console.log(" ");
}

