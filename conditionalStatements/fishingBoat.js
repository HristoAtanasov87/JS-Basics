function solve(budget, season, persons) {
    budget = Number(budget);
    persons = Number(persons);

    let price = 0;

    switch (season) {
        case "Spring":
            if (persons <= 6) {
                price = 3000 * 0.9;
            } else if (persons >= 7 && persons <= 11) {
                price = 3000 * 0.85;
            } else if (persons > 12) {
                price = 3000 * 0.75;
            }
            break;
        case "Summer":
            if (persons <= 6) {
                price = 4200 * 0.9;
            } else if (persons >= 7 && persons <= 11) {
                price = 4200 * 0.85;
            } else if (persons > 12) {
                price = 4200 * 0.75;
            }
            break;
        case "Autumn":
            if (persons <= 6) {
                price = 4200 * 0.9;
            } else if (persons >= 7 && persons <= 11) {
                price = 4200 * 0.85;
            } else if (persons > 12) {
                price = 4200 * 0.75;
            }
            break;
        case "Winter":
            if (persons <= 6) {
                price = 2600 * 0.9;
            } else if (persons >= 7 && persons <= 11) {
                price = 2600 * 0.85;
            } else if (persons > 12) {
                price = 2600 * 0.75;
            }
            break;
    }

    let discount = 1;

    if ((persons % 2 === 0) && season != "Autumn") {
        discount = 0.95;
    }

    let total = price * discount;
    let extra = budget - total;
    let needed = total - budget;

    if (budget >= total) {
        console.log(`Yes! You have ${extra.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${needed.toFixed(2)} leva.`);
    }
}

solve("3600",
"Autumn",
"6")

