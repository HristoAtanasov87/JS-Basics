function solve(budget, season) {
    budget = Number(budget);

    let type = "";

    if (budget <= 100) {
        type = "Economy class";
    } else if (budget > 100 && budget <= 500) {
        type = "Compact class";
    } else if (budget > 500) {
        type = "Luxury class";
    }

    let car = "";
    let price = 0;
    switch(type) {
        case "Economy class":
            if (season === "Summer") {
                car = "Cabrio";
                price = budget * 0.35;
            } else {
                car = "Jeep";
                price = budget * 0.65;
            }
            break;
        case "Compact class":
            if (season === "Summer") {
                car = "Cabrio";
                price = budget * 0.45;
            } else {
                car = "Jeep";
                price = budget * 0.8;
            }
            break;
        case "Luxury class":
            car = "Jeep"
            price = budget * 0.9;
            break;
    }
    console.log(`${type}`);
    console.log(`${car} - ${price.toFixed(2)}`);
}

solve("99.99", "Summer");