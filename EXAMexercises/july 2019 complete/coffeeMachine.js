function solve(drink, sugar, numberDrinks) {    
    numberDrinks = Number(numberDrinks);

    let price = 0;
    let discount = 0;
    let bill = 0;

    switch (drink) {
        case "Espresso":
            if (sugar === "Without") {
                price = 0.9;
                discount = 0.35;
            } else if (sugar === "Normal") {
                price = 1;                
            } else if (sugar === "Extra") {
                price = 1.5;
            }

            bill = price * numberDrinks;
            bill = bill - (bill * discount);

            if (numberDrinks >= 5) {
                discount = 0.25;
                bill = bill - (bill * discount);
            }
            break;
        case "Cappuccino":
            if (sugar === "Without") {
                price = 1.0;
                discount = 0.35;
            } else if (sugar === "Normal") {
                price = 1.2;                
            } else if (sugar === "Extra") {
                price = 1.6;
            }

            bill = price * numberDrinks;
            bill = bill - (bill * discount);            
            break;
        case "Tea":
            if (sugar === "Without") {
                price = 0.5;
                discount = 0.35;
            } else if (sugar === "Normal") {
                price = 0.6;                
            } else if (sugar === "Extra") {
                price = 0.7;
            }

            bill = price * numberDrinks;
            bill = bill - (bill * discount);
            break;
    }
    
    if (bill > 15) {
        discount = 0.2;
        bill = bill - (bill * discount);
    }

    console.log(`You bought ${numberDrinks} cups of ${drink} for ${bill.toFixed(2)} lv.`);
 
}

solve('Espresso', 'Without', '10')