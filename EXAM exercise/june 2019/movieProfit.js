function solve(movie, days, tickets, ticketPrice, cinemaPercentage) {
    days = Number(days);
    tickets = Number(tickets);
    ticketPrice = Number(ticketPrice);
    cinemaPercentage = Number(cinemaPercentage);

    let moneyEarned = tickets * ticketPrice * days;
    moneyEarned = moneyEarned - (moneyEarned * cinemaPercentage / 100);
    
    console.log(`The profit from the movie ${movie} is ${moneyEarned.toFixed(2)} lv.`);
}

solve("The Programmer", "20", "500", "7.5", "7");