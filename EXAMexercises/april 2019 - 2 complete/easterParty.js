function solve(input) {

    guests = Number(input[0]);
    couvert = Number(input[1]);
    budget = Number(input[2]);

    let discount = 0;

    if (guests >= 10 && guests <= 15) {
        discount = 0.85;
    } else if (guests > 15 && guests <= 20) {
        discount = 0.8;
    } else if (guests > 20) {
        discount = 0.75;
    } else if (guests < 10) {
        discount = 1;
    }

    let bill = guests * couvert * discount;
    let cake = budget * 0.1;
    let spent = bill + cake;

    if (budget >= spent) {
        console.log(`It is party time! ${(budget - spent).toFixed(2)} leva left.`)
    } else {
        console.log(`No party! ${(spent - budget).toFixed(2)} leva needed.`);
    }
}

solve("24", "35", "550");