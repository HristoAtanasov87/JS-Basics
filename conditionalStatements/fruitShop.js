function solve(fruit, day, quantity) {
    quantity = Number(quantity);

    let working = 0;
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            working = 1;
            break;
        case "Saturday":
        case "Sunday":
            working = 2;
            break;
        default:
            console.log("error");
            break;
    }

    let price = 0;

    if (working === 1) {
        switch (fruit) {
            case "banana":
                price = 2.5;
                break;
            case "apple":
                price = 1.2;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.7;
                break;
            case "pineapple":
                price = 5.5;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                console.log("error");
                break;
        }
    } else if (working === 2) {
        switch (fruit) {
            case "banana":
                price = 2.7;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.9;
                break;
            case "grapefruit":
                price = 1.60;
                break;
            case "kiwi":
                price = 3.0;
                break;
            case "pineapple":
                price = 5.6;
                break;
            case "grapes":
                price = 4.20;
                break;
            default:
                console.log("error");
                break;
        }
    }

    if (price != 0) {
        console.log((price * quantity).toFixed(2));
    }

}


solve("apple", "Tuesday", "2");
solve("orange", "Sunday", "3");
solve("kiwi", "Monday", "2.5");
solve("grapes", "Saturday", "0.5");
solve("tomato", "Monday", "0.5");