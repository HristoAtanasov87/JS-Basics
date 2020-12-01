function solve(destination, packet, vip, days) {
    days = Number(days);
    let pricePerDay = 0;
    let isCorrect = true;

    switch (destination) {
        case "Bansko":
            if (packet === "noEquipment") {                
                pricePerDay = 80;
                if (vip === "yes") {
                    pricePerDay *= 0.95;
                }
            } else if (packet === "withEquipment") {
                pricePerDay = 100;
                if (vip === "yes") {
                    pricePerDay *= 0.90;
                }
            } else {
                isCorrect = false;
            }
            break;
        case "Borovets":
            if (packet === "noEquipment") {
                pricePerDay = 80;
                if (vip === "yes") {
                    pricePerDay *= 0.95;
                }
            } else if (packet === "withEquipment") {
                pricePerDay = 100;
                if (vip === "yes") {
                    pricePerDay *= 0.90;
                }
            } else {
                isCorrect = false;
            }
            break;
        case "Varna":
            if (packet === "noBreakfast") {
                pricePerDay = 100;
                if (vip === "yes") {
                    pricePerDay *= 0.93;
                }
            } else if (packet === "withBreakfast") {
                pricePerDay = 130
                if (vip === "yes") {
                    pricePerDay *= 0.88;
                }
            } else {
                isCorrect = false;
            }
            break;
        case "Burgas":
            if (packet === "noBreakfast") {
                pricePerDay = 100;
                if (vip === "yes") {
                    pricePerDay *= 0.93;
                }
            } else if (packet === "withBreakfast") {
                pricePerDay = 130
                if (vip === "yes") {
                    pricePerDay *= 0.88;
                }
            } else {
                isCorrect = false;
            }
            break;
        default:
            isCorrect = false;
            break;
    }

    let totalPrice = 0;

    if (isCorrect) {
        if (days > 7) {
            days--;
            totalPrice = days * pricePerDay;
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else if (days >= 1 && days < 7) {
            totalPrice = days * pricePerDay;
            console.log(`The price is ${totalPrice.toFixed(2)}lv! Have a nice time!`);
        } else if (days < 1) {
            console.log("Days must be positive number!");
        }
    } else {
        console.log("Invalid input!");
    }
}

// solve("Borovets", "noEquipment", "yes", "6");
// solve("Varna", "withBreakfast", "no", "0");
solve("Gabrovo", "noBreakfast", "no", "3");
