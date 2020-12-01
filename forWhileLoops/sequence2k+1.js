function solve(input) {
    let number = Number(input[0]);
    let data = 1;
    console.log(data);
    while (true) {
        
        data = data * 2 + 1;
        
        if (data > number) {
            break;
        } else {
            console.log(data);
        }
        
    }

}

solve(["3"]);