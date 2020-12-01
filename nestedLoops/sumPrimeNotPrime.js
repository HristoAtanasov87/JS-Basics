function solve(input) {
    let index = 0;
    let command = input[index];
    let sumNotPrime = 0;
    let sumPrime = 0;

    while (command !== "stop") {
        let number = Number(command);
        let count = 0;

        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }

        if (number < 0) {
            console.log("Number is negative.");            
        } else if (count <= 2) {
            sumPrime += number;
        } else {
            sumNotPrime += number;
        }

        index++;
        command = input[index];
    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}

solve(["0",
"-9",
"0",
"stop"])


