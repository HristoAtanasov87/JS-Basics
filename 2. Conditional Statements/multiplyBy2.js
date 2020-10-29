function solve(input) {
    for (let i = 0; i < input.length; i++) {
        if (Number(input[i]) > 0) {
            console.log(`Result: ${(Number(input[i]) * 2).toFixed(2)}`);
        } else {
            console.log("Negative number!");
            break;
        }         
    }
}

solve(["12", "43.2144", "12.3", "543.23", "-20"]);