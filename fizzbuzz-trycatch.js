for (let i = 0; i <= 100; i++) {
    var fizzDiv = 5 / (i % 3)
    var buzzDiv = 5 / (i % 5)
    var output = ""

    try {
        isFinite(fizzDiv) || randomexception;
    } 
    catch  {
        output += "fizz";
    }
    try {
        isFinite(buzzDiv) || randomexception;
    } 
    catch  {
        output += "buzz";
    }
    console.log(output || i)
}