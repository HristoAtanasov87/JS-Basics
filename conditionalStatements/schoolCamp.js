function solve(season, group, kids, nights) {
    kids = Number(kids);
    nights = Number(nights);

    let pricePerNight = 0;
    let sport = "";


    switch(season) {
        case "Winter":
            if (group === "boys" || group === "girls") {
                pricePerNight = 9.6;
                if (group === "girls") {
                    sport = "Gymnastics";
                } else if (group === "boys") {
                    sport = "Judo";
                }
            } else if (group === "mixed") {
                pricePerNight = 10;
                sport = "Ski";
            }
            break;
        case "Spring":
            if (group === "boys" || group === "girls") {
                pricePerNight = 7.2;
                if (group === "girls") {
                    sport = "Athletics";
                } else if (group === "boys") {
                    sport = "Tennis";
                }
            } else if (group === "mixed") {
                pricePerNight = 9.5;
                sport = "Cycling";
            }
            break;
        case "Summer":
            if (group === "boys" || group === "girls") {
                pricePerNight = 15;
                if (group === "girls") {
                    sport = "Volleyball";
                } else if (group === "boys") {
                    sport = "Football";
                }
            } else if (group === "mixed") {
                pricePerNight = 20;
                sport = "Swimming";
            }
            break;
    }

    let discount = 0;

    if (kids >= 50) {
        discount = 0.5;
        console.log(`${sport} ${(nights * pricePerNight * discount * kids).toFixed(2)} lv.`);
    } else if (kids >= 20 && kids < 50) {
        discount = 0.85;
        console.log(`${sport} ${(nights * pricePerNight * discount * kids).toFixed(2)} lv.`);
    } else if (kids >= 10 && kids < 20) {
        discount = 0.95;
        console.log(`${sport} ${(nights * pricePerNight * discount * kids).toFixed(2)} lv.`);
    } else {
        console.log(`${sport} ${(nights * pricePerNight * kids).toFixed(2)} lv.`);
    }    
}

solve("Winter", "mixed", "9", "15");