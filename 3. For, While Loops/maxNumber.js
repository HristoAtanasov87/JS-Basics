function solve(input) {
    let index = 0;
    let highest = Number.NEGATIVE_INFINITY;
    let command = input[index];
    
    while (command !== "Stop") {
        let currentNumber = Number(command);
        if (highest < currentNumber) {
            highest = currentNumber;
        }

        index++;
        command = input[index];
    }
    console.log(highest);
}

solve(["100",
"99",
"80",
"70",
"Stop"]);
