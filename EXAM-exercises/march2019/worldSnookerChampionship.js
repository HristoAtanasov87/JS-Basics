function solve(stage, typeTicket, tickets, photo) {
    tickets = Number(tickets);
    let price = 0;

    switch (stage) {
        case "Quarter final":
            if (typeTicket === "Standard") {
                price = 55.50;
            } else if (typeTicket === "Premium") {
                price = 105.20;
            } else {
                price = 118.90;
            }
            break;
        case "Semi final":
            if (typeTicket === "Standard") {
                price = 75.88;
            } else if (typeTicket === "Premium") {
                price = 125.22;
            } else {
                price = 300.40;
            }
            break;
        case "Final":
            if (typeTicket === "Standard") {
                price = 110.10;
            } else if (typeTicket === "Premium") {
                price = 160.66;
            } else {
                price = 400;
            }
            break;
    }

    let total = tickets * price;
    let discount = 0;
    let pricePhoto = 40;    

    if (total > 4000) {
        discount = 0.25;
        pricePhoto = 0;        
    } else if (total > 2500 && total <= 4000) {
        discount = 0.1;        
    }

    total -= total * discount;

    if (photo === "Y") {
        total += tickets * pricePhoto;
    }

    console.log(`${total.toFixed(2)}`)
}

// solve("Final", "Premium", "25", "Y");
solve("Semi final", "VIP", "9", "Y");
