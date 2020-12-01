function solve(input) {
    let count = Number(input[2]);
    let price = 0;

    switch (input[0]) {
        case "Large":
            if (input[1] === "Red") {
                price = 16;
            } else if (input[1] === "Green") {
                price = 12;
            } else if (input[1] === "Yellow") {
                price = 9;
            }
            break;
        case "Medium":
            if (input[1] === "Red") {
                price = 13;
            } else if (input[1] === "Green") {
                price = 9;
            } else if (input[1] === "Yellow") {
                price = 7;
            }
            break;
        case "Small":
            if (input[1] === "Red") {
                price = 9;
            } else if (input[1] === "Green") {
                price = 8;
            } else if (input[1] === "Yellow") {
                price = 5;
            }
            break;
    }

    let totalPrice = count * price;
    let result = totalPrice * 0.65;
    console.log(`${result.toFixed(2)} leva.`)
}

solve(["Large", "Red", "7"]);
solve("Medium", "Green", "5");
solve("Small", "Yellow", "3");