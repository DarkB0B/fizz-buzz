//0 returns fizz buzz
for(var i = 0; i < 100; i++){
    for(var j = 0; !j && !(i % 3) && !j && !(i % 5); j++) {
        i++ 
        console.log("fizz buzz") 
    }
    for(var j = 0; !j && !(i % 3); j++) console.log("fizz")
    for(var j = 0; !j && !(i % 5); j++) console.log("buzz")
    for(var j = 0; !j && i % 3 && i % 5; j++) console.log(i)
}

console.log("-----------------------------------------------")

//0 doesnt return fizz buzz
for(var i = 0; i < 100; i++){
    for(var j = 0; i == 0; j++){
        console.log(i)
        i++ 
    }
    for(var j = 0; !j && !(i % 3) && !j && !(i % 5); j++) {
        i++ 
        console.log("fizz buzz") 
    }
    for(var j = 0; !j && !(i % 3); j++) console.log("fizz")
    for(var j = 0; !j && !(i % 5); j++) console.log("buzz")
    for(var j = 0; !j && i % 3 && i % 5; j++) console.log(i)
}

