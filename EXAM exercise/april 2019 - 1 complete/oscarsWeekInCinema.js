function solve(movie, typeOfHall, tickets) {
    tickets = Number(tickets);
    let price = 0;

    switch (movie) {
        case "A Star Is Born":
            if (typeOfHall === "normal") {
                price = 7.50;
            } else if (typeOfHall === "luxury") {
                price = 10.50;
            } else {
                price = 13.50;
            }
            break;
        case "Bohemian Rhapsody":
            if (typeOfHall === "normal") {
                price = 7.35;
            } else if (typeOfHall === "luxury") {
                price = 9.45;
            } else {
                price = 12.75;
            }
            break;
        case "Green Book":
            if (typeOfHall === "normal") {
                price = 8.15;
            } else if (typeOfHall === "luxury") {
                price = 10.25;
            } else {
                price = 13.25;
            }
            break;
        case "The Favourite":
            if (typeOfHall === "normal") {
                price = 8.75;
            } else if (typeOfHall === "luxury") {
                price = 11.55;
            } else {
                price = 13.95;
            }
            break;
    }

    let profit = tickets * price;
    console.log(`${movie} -> ${profit.toFixed(2)} lv.`);
}

solve("A Star Is Born",
"luxury",
"42"
)