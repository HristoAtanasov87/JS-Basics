function solve(fuel, consumption, laps) {
    fuel = Number(fuel);
    consumption = Number(consumption);
    laps = Number(laps);

    let count = 0;
    let remaining = fuel - consumption;

    for (let i = 2; i <= laps; i++) {
        remaining -= consumption - 0.1;
        count++;
        if (remaining <= 0) {
            break;
        }
    }

    if (remaining <= 0) {
        console.log(`You are out of fuel in round ${count}!`);
    } else {
        console.log("Congrats! You won the race!");
    }
}



solve("50", "4.3", "30")