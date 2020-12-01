function solve(fruit, size, quantity) {

    quantity = Number(quantity);

    let price = 0;

    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                price = 2 * 56 * quantity;
            } else {
                price = 5 * 28.7 * quantity;
            }
            break;
        case "Mango":
            if (size === "small") {
                price = 2 * 36.66 * quantity;
            } else {
                price = 5 * 19.6 * quantity;
            }
            break;
        case "Pineapple":
            if (size === "small") {
                price = 42.10 * 2 * quantity;
            } else {
                price = 24.8 * 5 * quantity;
            }
            break;
        case "Raspberry":
            if (size === "small") {
                price = 2 * 20 * quantity;
            } else {
                price = 5 * 15.2 * quantity;
            }
            break;
    }

    if (price >= 400 && price <= 1000) {
        price = price * 0.85;
        console.log(`${price.toFixed(2)} lv.`);
    } else if (price > 1000) {
        price = price * 0.5;
        console.log(`${price.toFixed(2)}`);
    } else {
        console.log(price.toFixed(2));
    }

}

solve("Mango", "big", "8");