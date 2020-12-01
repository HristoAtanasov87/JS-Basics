function solve(budget, destination, season, days) {
    budget = Number(budget);
    days = Number(days);
    let price = 0;
    let discount = 0;

    switch (destination) {
        case "Dubai":
            if(season === "Winter") {
                price = 45000;
                discount = 0.7;
            } else {
                price = 40000;
                discount = 0.7;
            }
            break;
        case "Sofia":
            if (season === "Winter") {
                price = 17000;
                discount = 1.25;
            } else {
                price = 12500;
                discount = 1.25;
            }
            break;
        case "London":
            if (season === "Winter") {
                price = 24000;
                discount = 1;
            } else {
                price = 20250;
                discount = 1;
            }
            break;            
    }
    let bill = days * price * discount;
    if (budget >= bill) {
        console.log(`The budget for the movie is enough! We have ${(budget - bill).toFixed(2)} leva left!`);
    } else {
        console.log(`The director needs ${(bill - budget).toFixed(2)} leva more!`);
    }
}
// solve("400000", "Sofia", "Winter", "20");
solve("200000", "London", "Summer","7")