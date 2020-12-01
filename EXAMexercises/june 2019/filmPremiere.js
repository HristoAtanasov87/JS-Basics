function solve(movie, junkFood, tickets) {
    tickets = Number(tickets);

    switch (movie) {
        case "John Wick":
            if (junkFood === "Drink") {
                ticketPrice = 12;
            } else if (junkFood === "Popcorn") {
                ticketPrice = 15;
            } else {
                ticketPrice = 19;
            }
            break;
        case "Star Wars":
            if (junkFood === "Drink") {
                ticketPrice = 18;
            } else if (junkFood === "Popcorn") {
                ticketPrice = 25;
            } else {
                ticketPrice = 30;
            }

            if (tickets >= 4) {
                ticketPrice *= 0.7;
            }
            break;
        case "Jumanji":
            if (junkFood === "Drink") {
                ticketPrice = 9;
            } else if (junkFood === "Popcorn") {
                ticketPrice = 11;
            } else {
                ticketPrice = 14;
            }

            if (tickets === 2) {
                ticketPrice *= 0.85;
            }
            break;
    }
    let bill = tickets * ticketPrice;
    console.log(`Your bill is ${bill.toFixed(2)} leva.`);
}

// solve("John Wick", "Drink", "6");
solve("Star Wars", "Popcorn", "4");
// solve("Jumanji", "Menu", "2");