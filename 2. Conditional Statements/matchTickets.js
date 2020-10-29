function solve(budget, type, people) {
    budget = Number(budget);
    people = Number(people);
    let ticket = 0;
    switch (type) {
        case "VIP":
            if (people >= 1 && people < 5) {
                budget *= 0.25;
            } else if (people >= 5 && people < 10) {
                budget *= 0.4;
            } else if (people >= 10 && people < 25) {
                budget *= 0.5;
            } else if (people >= 25 && people < 50) {
                budget *= 0.6;
            } else {
                budget *= 0.75;
            }
            ticket = 499.99;
            break;
        case "Normal":
            if (people >= 1 && people < 5) {
                budget *= 0.25;
            } else if (people >= 5 && people < 10) {
                budget *= 0.4;
            } else if (people >= 10 && people < 25) {
                budget *= 0.5;
            } else if (people >= 25 && people < 50) {
                budget *= 0.6;
            } else {
                budget *= 0.75;
            }
            ticket = 249.99;
            break;
    }
    if (people * ticket <= budget) {
        console.log(`Yes! You have ${(budget - (people * ticket)).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${((people * ticket) - budget).toFixed(2)} leva.`)
    }
}

solve("50000", "Normal", "200");