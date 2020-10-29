function solve(input) {
    let nums = Number(input[0]);
    let index = 1;
    
    let add = 0;
    let average = 0;

    while (index < nums + 1) {
        let number = Number(input[index]);
        add += number;
        average = add / nums;

        index++;
       
    } 
    console.log(average.toFixed(2));
}

solve(["2",
    "6",
    "4"    
    ]);