function solve(fuel, liters, card) {
    liters = Number(liters);
    let price = 0;

    switch (fuel) {
        case "Gas":
            if (card === "Yes") {
                if (liters >= 20 && liters <= 25) {
                    price = liters * 0.85 * 0.92;
                } else if (liters > 25) {
                    price = liters * 0.85 * 0.90;
                } else {
                    price = liters * 0.85;
                }
            } else if (card === "No") { 
                if (liters >= 20 && liters <= 25) {
                    price = liters * 0.93 * 0.92;
                } else if (liters > 25) {
                    price = liters * 0.93 * 0.90;
                } else {
                    price = liters * 0.93;
                }
            }        
            break;
        case "Gasoline":
            if (card === "Yes") {
                if (liters >= 20 && liters <= 25) {
                    price = liters * 2.04 * 0.92;
                } else if (liters > 25) {
                    price = liters * 2.04 * 0.90;
                } else {
                    price = liters * 2.04;
                }
            } else if (card === "No") { 
                if (liters >= 20 && liters <= 25) {
                    price = liters * 2.22 * 0.92;
                } else if (liters > 25) {
                    price = liters * 2.22 * 0.90;
                } else {
                    price = liters * 2.22;
                }
            }        
            break;
        case "Diesel":
            if (card === "Yes") {
                if (liters >= 20 && liters <= 25) {
                    price = liters * 2.21 * 0.92;
                } else if (liters > 25) {
                    price = liters * 2.21 * 0.90;
                } else {
                    price = liters * 2.21;
                }
            } else if (card === "No") { 
                if (liters >= 20 && liters <= 25) {
                    price = liters * 2.33 * 0.92;
                } else if (liters > 25) {
                    price = liters * 2.33 * 0.90;
                } else {
                    price = liters * 2.33;
                }
            }        
            break;    
    }
    console.log(`${price.toFixed(2)} lv.`);

}

solve("Diesel", "19", "No");