function charity(days, cooks, cakes, waffles, pancakes) {
    let dailyCakes = Number(cooks) * Number(cakes);
    let dailyWaffles = Number(cooks) * Number(waffles);
    let dailyPancakes = Number(cooks) * Number(pancakes);
    let incomeCakes = Number(days) * dailyCakes * 45;
    let incomeWaffles = Number(days) * dailyWaffles * 5.8;
    let incomePancakes = Number(days) * dailyPancakes * 3.2;
    let totalIncome = incomeCakes + incomeWaffles + incomePancakes;
    let output = totalIncome - totalIncome / 8;

    console.log(output.toFixed(2));
}

charity("131", "5", "9", "33", "46")