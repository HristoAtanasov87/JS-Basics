function solve(input) {
    input = Number(input);

    factorial = 1;

    for (i = 1; i <= input; i++) {
        factorial *= i;   
    }
    console.log(factorial);
}

solve("8");