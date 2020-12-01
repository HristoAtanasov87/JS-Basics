function solve(input) {
    let money = Number(input[0]);
    let moneyAvailable = Number(input[1]);
    let countDays = 0;
    let countSpend = 0;
    let index = 2;
    let command = input[index];
    let isSaved = false;

    while(true) {
        if (command === "spend") {
            index++;
            let moneyToProcess = Number(input[index]);
            moneyAvailable -= moneyToProcess;
            countDays++;
            countSpend++;
            if (countSpend === 5) {
                console.log(`You can't save the money.`);
                console.log(`${countDays}`);
                break;
            }
            if (moneyAvailable < 0) {
                moneyAvailable = 0;
            }
        } else {
            index++;
            let moneyToProcess = Number(input[index]);
            moneyAvailable += moneyToProcess;
            countDays++;
            countSpend = 0;
            if (moneyAvailable >= money) {
                isSaved = true;
                break;
            }
        }
        index++;
        command = input[index];
    }
    if (isSaved) {
        console.log(`You saved the money for ${countDays} days.`)
    }
}

solve(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);


