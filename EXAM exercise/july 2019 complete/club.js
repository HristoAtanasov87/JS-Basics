function solve(input) {
    let target = Number(input[0]);
    
    let moneyEarned = 0;
    let cocktailName = "";
    let numberCocktails = 0;
    let currentBill = 0;
    let isReached = false;

    let index = 1;
    let command = input[index];

    while (command !== "Party!") {
        cocktailName = command;
        let cocktailPrice = cocktailName.length;
        index++;
        numberCocktails = Number(input[index]);
        currentBill += cocktailPrice * numberCocktails;

        if (currentBill % 2 !== 0) {
            currentBill *= 0.75;
        }
        moneyEarned += currentBill;
        currentBill = 0;

        if (moneyEarned >= target) {
            isReached = true;
            break;           
        }

        index++;
        command = input[index];
    }

    if (isReached) {
        console.log("Target acquired.");
    } else {
        console.log(`We need ${(target - moneyEarned).toFixed(2)} leva more.`);        
    }
    console.log(`Club income - ${moneyEarned.toFixed(2)} leva.`);
}

// solve(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);
solve(["100", "Sidecar", "7", "Mojito", "5", "White Russian", "10"]);