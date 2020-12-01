function solve(input) {
    let nights = Number(input[2]);
    let price = 0;
    switch (input[0]) {
        case "France":
            if (input[1] === "21-23") {
                price = 30;
            } else if (input[1] === "24-27") {
                price = 35;
            } else if (input[1] === "28-31") {
                price = 40;
            }
            break;
        case "Italy":
            if (input[1] === "21-23") {
                price = 28;
            } else if (input[1] === "24-27") {
                price = 32;
            } else if (input[1] === "28-31") {
                price = 39;
            }
            break;
        case "Germany":
            if (input[1] === "21-23") {
                price = 32;
            } else if (input[1] === "24-27") {
                price = 37;
            } else if (input[1] === "28-31") {
                price = 43;
            }
            break;
    }
    totalPrice = nights * price;
    console.log(`Easter trip to ${input[0]} : ${totalPrice.toFixed(2)} leva.`)

}

solve(["Germany", "24-27", "5"]);
solve("Italy", "21-23", "7");
solve("France", "28-31", "8");