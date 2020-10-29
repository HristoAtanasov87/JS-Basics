function solve(input) {
    let budget = Number(input[0]);
    let count = 0;
    let isEnough = true;
    let moneySpent = 0;

    let index = 1;
    let product = input[index]
    let price = 0;

    while (product !== "Stop") {
        index++;
        price = Number(input[index]);

        if (count === 2) {
            price *= 0.50;
        }
        
        budget -= price;

        if (budget < 0) {
            isEnough = false;
            break;
        }
        count++;
        moneySpent += price;

        index++;
        product = input[index];
    }

    if (isEnough) {
        console.log(`You bought ${count} products for ${moneySpent} leva.`);
    } else {
        console.log("You don't have enough money!");
        console.log(`You need ${(Math.abs(budget)).toFixed(2)} leva!`);
    }
}

solve(["153.20", "Backpack", "25.2", "Shoes", "54", "Sunglasses", "30", "Stop"]);

solve(["54", "Backpack", "24", "Shoes", "45"]);