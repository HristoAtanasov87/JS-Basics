function solve(budget, season) {
    budget = Number(budget)
    
    let sleep = "";

    if (budget <= 1000) {
        sleep = "Camp";        
    } else if (budget > 1000 && budget <= 3000) {
        sleep = "Hut";
    } else if (budget > 3000) {
        sleep = "Hotel";
    }
    
    let destination = "";
    let price = 0;
    
    switch(sleep) {
        case "Camp":
            if (season === "Summer") {
                destination = "Alaska";
                price = budget * 0.65;        
            } else {
                destination = "Morocco";
                price = budget * 0.45;
            }
            break;
        case "Hut":
            if (season === "Summer") {
                destination = "Alaska";
                price = budget * 0.80;        
            } else {
                destination = "Morocco";
                price = budget * 0.60;
            }
            break;
        case "Hotel":
            if (season === "Summer") {
                destination = "Alaska";
                price = budget * 0.9;        
            } else {
                destination = "Morocco";
                price = budget * 0.9;
            }
            break;
    }
    console.log(`${destination} - ${sleep} - ${price.toFixed(2)}`);
}

solve("800", "Summer")