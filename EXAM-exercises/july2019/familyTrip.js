function solve(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let pricePerNight = Number(input[2]);
    let additional = Number(input[3]) / 100;

    if (nights >= 7) {
        pricePerNight *= 0.95;
    }

    let sleepMoney = nights * pricePerNight;
    let addMoney = additional * budget;
    let totalMoney = sleepMoney + addMoney;
    let moneyLeft = budget - totalMoney;

    if (totalMoney <= budget) {
        console.log(`Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(Math.abs(moneyLeft)).toFixed(2)} leva needed.`);
    }
}

solve(['800.50', '8', '100', '2']);