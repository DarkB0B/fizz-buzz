//work in progress


for(var i = 0; i < 100; i++){
let output;
switch(i % 3){
    case 0:
        output = "fizz";
        switch(i % 5){
            case 0:
                output += " buzz"
                break;
            default:
                console.log(output)
                break;
        }
    default:
            switch(i % 5){
                case 0:
                    output = "buzz"
                    console.log(output);
                    break;
            default:
                console.log(i);
                break;

}
}}
