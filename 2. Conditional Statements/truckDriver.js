function solve(season, kilometers) {
    kilometers = Number(kilometers);

    let moneyPerKilometer = 0;

    switch (season) {
        case "Spring":
            if (kilometers <= 5000) {
                moneyPerKilometer = 0.75;
            } else if (kilometers > 5000 && kilometers <= 10000) {
                moneyPerKilometer = 0.95;
            } else if (kilometers > 10000 && kilometers <= 20000) {
                moneyPerKilometer = 1.45;
            }
            break;
        case "Autumn":
            if (kilometers <= 5000) {
                moneyPerKilometer = 0.75;
            } else if (kilometers > 5000 && kilometers <= 10000) {
                moneyPerKilometer = 0.95;
            } else if (kilometers > 10000 && kilometers <= 20000) {
                moneyPerKilometer = 1.45;
            }
            break;
        case "Summer":
            if (kilometers <= 5000) {
                moneyPerKilometer = 0.90;
            } else if (kilometers > 5000 && kilometers <= 10000) {
                moneyPerKilometer = 1.10;
            } else if (kilometers > 10000 && kilometers <= 20000) {
                moneyPerKilometer = 1.45;
            }
            break;
        case "Winter":
            if (kilometers <= 5000) {
                moneyPerKilometer = 1.05;
            } else if (kilometers > 5000 && kilometers <= 10000) {
                moneyPerKilometer = 1.25;
            } else if (kilometers > 10000 && kilometers <= 20000) {
                moneyPerKilometer = 1.45;
            }
            break;
    }
    let moneyEarned = kilometers * moneyPerKilometer;
    let result = (moneyEarned - (moneyEarned * 0.1)) * 4;
    console.log(result.toFixed(2));
}    

solve("Summer", "3455");