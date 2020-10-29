function solve(days, room, feedback) {
    days = Number(days);
    let totalDays = days - 1;
    let discount;

    if (totalDays < 10) {
        switch(room) {
            case "room for one person":
                discount = 0;
                break;
            case "apartment":
                discount = 0.3;
                break;
            case "president apartment":
                discount = 0.1;
                break;
        }
    } else if (totalDays >= 10 && days <= 15) {
        switch(room) {
            case "room for one person":
                discount = 0;
                break;
            case "apartment":
                discount = 0.35;
                break;
            case "president apartment":
                discount = 0.15;
                break;
        }
    } else if (totalDays > 15) {
        switch(room) {
            case "room for one person":
                discount = 0;
                break;
            case "apartment":
                discount = 0.5;
                break;
            case "president apartment":
                discount = 0.2;
                break;
        }
    }

    let price = 0;

    switch(room) {
        case "room for one person":
            price = totalDays * 18;
            break;
        case "apartment":
            price = totalDays * 25;
            break;
        case "president apartment":
            price = totalDays * 35;
            break;
    }

    let totalPrice = (price - (price * discount));

    if (feedback === "positive") {
        console.log((totalPrice * 1.25).toFixed(2)); 
    } else if (feedback === "negative") {
        console.log((totalPrice * 0.9).toFixed(2));
    }
}

// solve("14", "apartment","positive");
// solve("30", "president apartment","negative");
// solve("12", "room for one person","positive");
solve("2", "apartment","positive");