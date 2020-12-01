function solve(input) {
    let number = Number(input[0]);
    let index = 1;
    let command = Number(input[index]);
    let sum = 0;

    while (sum <= number) {
        sum += command;

        index++
        command = Number(input[index]);
        if (index > input.length - 1) {
            break;
        }
    }
    console.log(sum);
    
}

solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])

