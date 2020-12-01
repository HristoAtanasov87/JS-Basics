function solve(flowers, quantity, budget) {
    quantity = Number(quantity);
    budget = Number(budget);

    let price = 0;

    switch (flowers) {
        case "Roses":
            if (quantity > 80) {
                price = quantity * 5 * 0.9;
            } else {
                price = quantity * 5;
            }
            break;
        case "Dahlias":
            if (quantity > 90) {
                price = quantity * 3.8 * 0.85;
            } else {
                price = quantity * 3.8;
            }
            break;
        case "Tulips":
            if (quantity > 80) {
                price = quantity * 2.8 * 0.85;
            } else {
                price = quantity * 2.8;
            }
            break;
        case "Narcissus":
            if (quantity < 120) {
                price = quantity * 3 * 1.15;
            } else {
                price = quantity * 3;
            }
            break;
        case "Gladiolus":
            if (quantity < 80) {
                price = quantity * 2.5 * 1.2;
            } else {
                price = quantity * 2.5;
            }
            break;    
    }
    
    let extra = budget - price;
    let needed = price - budget;

    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${quantity} ${flowers} and ${extra.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${needed.toFixed(2)} leva more.`)
    }
}

solve("Narcissus",
"119",
"360")


