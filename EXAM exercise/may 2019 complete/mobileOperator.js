function solve(period, typeOfContract, internet, months) {
    
    months = Number(months);
    let tax = 0;
    let discount = 0;

    switch (typeOfContract) {
        case "Small":
            if (period === "one") {
                tax = 9.98;
            } else {
                tax = 8.58;
                discount = 0.9625;
            }
            break;
        case "Middle":
            if (period === "one") {
                tax = 18.99;
            } else {
                tax = 17.09;
                discount = 0.9625;
            }
            break;
        case "Large":
            if (period === "one") {
                tax = 25.98;
            } else {
                tax = 23.59;
                discount = 0.9625;
            }
            break;
        case "ExtraLarge":
            if (period === "one") {
                tax = 35.99;
            } else {
                tax = 31.79;
                discount = 0.9625;
            }
            break;
    }

    if (internet === "yes" && tax <= 10) {
        tax += 5.5;
    } else if (internet === "yes" && (tax > 10 && tax <= 30)) {
        tax += 4.35;
    } else if (internet === "yes" && tax > 30) {
        tax += 3.85;
    }

    if (period === "two") {
        tax *= discount;
    }
    let finalTax = months * tax;
    
    console.log(`${finalTax.toFixed(2)} lv.`);
}

solve("one", "Small", "yes", "10");