function solve(input) {
    let index = 0;
    let lowest = Number.POSITIVE_INFINITY
    let command = input[index];
    
    while (command !== "Stop") {
        let currentNumber = Number(command);
        if (lowest > currentNumber) {
            lowest = currentNumber;
        }

        index++;
        command = input[index];
    }
    console.log(lowest);
}

solve(["100",
"99",
"80",
"70",
"Stop"])
