
    for (let i = 1; i <= 100; i++) {
         let fb = ["", "Fizz", "Buzz", i.toString()];
         console.log(fb[(!(i % 3) + 0)]+fb[((!(i % 5)) * 2)]+fb[(((i%3!=0) && (i%5!=0))+0) * 3]);
    }


