function solve(budget, litersFuel, day) {
    budget = Number(budget);
    litersFuel = Number(litersFuel);

    let moneyFuel = litersFuel * 2.1;
    let result = moneyFuel + 100;

    if (day === "Saturday") {
        discount = 0.10;
        result *= 0.90;
    } else {
        discount = 0.20;
        result *= 0.80;
    }

    if (budget >= result) {
        console.log(`Safari time! Money left: ${(budget - result).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(result - budget).toFixed(2)} lv.`);
    }
}
solve("1000", "10", "Sunday");