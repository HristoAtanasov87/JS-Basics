function solve(sum, sex, age, sport) {
    sum = Number(sum);
    age = Number(age);

    let price = 0;

    switch (sport) {
        case "Gym":
            if (sex === "m") {
                price = 42;
                if (age <= 19) {
                    price = 42 * 0.8;
                }
            } else {
                price = 35;
                if (age <= 19) {
                    price = 35 * 0.8;
                }
            }
            break;
        case "Boxing":
            if (sex === "m") {
                price = 41;
                if (age <= 19) {
                    price = 41 * 0.8;
                }
            } else {
                price = 37;
                if (age <= 19) {
                    price = 37 * 0.8;
                }
            }
            break;
        case "Yoga":
            if (sex === "m") {
                price = 45;
                if (age <= 19) {
                    price = 45 * 0.8;
                }
            } else {
                price = 42;
                if (age <= 19) {
                    price = 42 * 0.8;
                }
            }
            break;
        case "Zumba":
            if (sex === "m") {
                price = 34;
                if (age <= 19) {
                    price = 34 * 0.8;
                }
            } else {
                price = 31;
                if (age <= 19) {
                    price = 31 * 0.8;
                }
            }
            break;
        case "Dances":
            if (sex === "m") {
                price = 51;
                if (age <= 19) {
                    price = 51 * 0.8;
                }
            } else {
                price = 53;
                if (age <= 19) {
                    price = 53 * 0.8;
                }
            }
            break;
        case "Pilates":
            if (sex === "m") {
                price = 39;
                if (age <= 19) {
                    price = 39 * 0.8;
                }
            } else {
                price = 37;
                if (age <= 19) {
                    price = 37 * 0.8;
                }
            }
            break;
    }
    if (price <= sum) {
        console.log(`You purchased a 1 month pass for ${sport}.`);
    } else {
        let money = price - sum;
        console.log(`You don't have enough money! You need ${money.toFixed(2)} more.`);
    }
}


solve("50", "m", "23", "Gym");
solve("20", "f", "15", "Yoga");
solve("10", "m", "50", "Pilates");