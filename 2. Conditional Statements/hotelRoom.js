function solve(month, days) {
    days = Number(days);

    let discount = 0;
    let studio = 0;
    let apartment = 0;
    
    switch (month) {
        case "May":
            if (days > 7 && days <= 14) {
                discount = 0.95;
                studio = 50 * days * discount;
                apartment = 65 * days;
            } else if (days > 14) {
                discount = 0.70;
                studio = 50 * days * discount;
                apartment = 65 * days * 0.9;
            } else {
                studio = 50 * days;
                apartment = 65 * days;
            }
            break;
        case "October":
            if (days > 7 && days < 14) {
                discount = 0.95;
                studio = 50 * days * discount;
                apartment = 65 * days;
            } else if (days > 14) {
                discount = 0.70;
                studio = 50 * days * discount;
                apartment = 65 * days * 0.9;
            } else {
                studio = 50 * days;
                apartment = 65 * days;
            }
            break;
        case "June":
            if (days > 14) {
                discount = 0.8;
                studio = 75.2 * days * discount;
                apartment = 68.7 * days * 0.9;
            } else {
                studio = 75.2 * days;
                apartment = 68.7 * days;
            }
            break;
        case "September":
            if (days > 14) {
                discount = 0.8;
                studio = 75.2 * days * discount;
                apartment = 68.7 * days * 0.9;
            } else {
                studio = 75.2 * days;
                apartment = 68.7 * days;
            }
            break;
        case "July":
            if (days > 14) {
                apartment = 77 * days * 0.9;
                studio = 76 * days;
            } else {
                studio = 76 * days;
                apartment = 77 * days;
            }
            break;
        case "August":
            if (days > 14) {
                apartment = 77 * days * 0.9;
                studio = 76 * days;
            } else {
                studio = 76 * days;
                apartment = 77 * days;
            }
            break;
    }

    console.log(`Apartment: ${apartment.toFixed(2)} lv.`);
    console.log(`Studio: ${studio.toFixed(2)} lv.`);

}

solve("August",
"20")


