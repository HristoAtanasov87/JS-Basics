function solve(input) {
    let budget = Number(input[0]);
    let series = Number(input[1]);
    let price = 0;

    for (let i = 2; i < input.length; i++) {
        let currentSeries = input[i];

        switch (currentSeries) {
            case "Thrones":
                i++;
                price += Number(input[i]) * 0.5;
                break;
            case "Lucifer":
                i++;
                price += Number(input[i]) * 0.6;
                break;
            case "Protector":
                i++;
                price += Number(input[i]) * 0.7;
                break;
            case "TotalDrama":
                i++;
                price += Number(input[i]) * 0.8;
                break;
            case "Area":
                i++;
                price += Number(input[i]) * 0.9;
                break;
            default:
                i++;
                price += Number(input[i]);
                break;
        }
    }
    if (budget >= price) {
        console.log(`You bought all the series and left with ${(budget - price).toFixed(2)} lv.`);
    } else {
        console.log(`You need ${(price - budget).toFixed(2)} lv. more to buy the series!`);
    }
}

solve(["10", "3","Thrones", "5", "Riverdale", "5", "Gotham", "2"]);