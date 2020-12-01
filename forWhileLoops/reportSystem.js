function solve(input) {
    let moneyRequired = Number(input[0]);
    let moneyCollected = 0;
    let isEnough = false;
    let countCard = 0;
    let countCash = 0;
    let moneyCard = 0;
    let moneyCash = 0;

    let index = 1;
    let command = input[index];

    while (command !== "End") {
        let amount = Number(input[index]);
        if (amount > 100 && index % 2 === 0) {
            console.log("Product sold!");
            countCard++;
            moneyCard += amount;
            moneyCollected += amount;
            if (moneyCollected >= moneyRequired) {
                isEnough = true;
                break;
            }
            index++;
            command = input[index];
        } else if (amount > 100 && index % 2 !== 0) {
            console.log("Error in transaction!");
            index++;
            command = input[index];
        } else if (amount >= 10 && amount <= 100) {
            console.log("Product sold!");
            moneyCollected += amount;
            if (index % 2 === 0) {
                countCard++;
                moneyCard += amount;
            } else {
                countCash++;
                moneyCash += amount;
            }
            if (moneyCollected >= moneyRequired) {
                isEnough = true;
                break;
            }
            index++;
            command = input[index];
        } else if (amount < 10 && index % 2 === 0) {
            console.log("Error in transaction!");
            index++;
            command = input[index];
        } else if (amount < 10 && index % 2 !== 0) {
            console.log("Product sold!");
            moneyCollected += amount;
            countCash++;
            moneyCash += amount;
            if (moneyCollected >= moneyRequired) {
                isEnough = true;
                break;
            }
            index++;
            command = input[index];
        }
    }

    if (isEnough === true) {
        console.log(`Average CS: ${(moneyCash / countCash).toFixed(2)}`);
        console.log(`Average CC: ${(moneyCard / countCard).toFixed(2)}`);
    } else {
        console.log("Failed to collect required money for charity.");
    }
}

// solve(["500", "120", "8", "63", "256", "78", "317"]);
solve(["600", "86", "150", "98", "227", "End"]);