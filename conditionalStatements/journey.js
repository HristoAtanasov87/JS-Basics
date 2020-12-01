function solve(budget, season) {
    budget = Number(budget);

    let location;
    let rent;

    switch (season) {
        case "summer":
            if (budget <= 100) {
                location = "Bulgaria";
                rent = budget * 0.3;
                break;
            } else if (budget > 100 && budget <= 1000) {
                location = "Balkans";
                rent = budget * 0.4;
                break;
            } else {
                location = "Europe";
                rent = budget * 0.9;
                break;
            }
        case "winter":
            if (budget <= 100) {
                location = "Bulgaria";
                rent = budget * 0.7;
                break;
            } else if (budget > 100 && budget <= 1000) {
                location = "Balkans";
                rent = budget * 0.8;
                break;
            } else {
                location = "Europe";
                rent = budget * 0.9;
                break;
            }
    }

    console.log(`Somewhere in ${location}`);
    let vacation;

    if (season === "summer" && location != "Europe") {
        vacation = "Camp";
    } else if ((season === "winter") || location === "Europe") {
        vacation = "Hotel";
    }

    console.log(`${vacation} - ${rent.toFixed(2)}`);
}

solve("50", "summer");
solve("75", "winter");
solve("312", "summer");
solve("678.53", "winter");
solve("1500", "winter");