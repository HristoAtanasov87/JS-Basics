// function solve(product, city, quantity) {
//     quantity = Number(quantity);

//     let price = 0;

//     if (city === "Sofia") {
//         if (product === "coffee") {
//             price = quantity * 0.5;        
//         } else if (product === "water") {
//             price = quantity * 0.8;
//         } else if (product === "beer") {
//             price = quantity * 1.2;
//         } else if (product === "sweets") {
//             price = quantity * 1.45;
//         } else if (product === "peanuts") {
//             price = quantity * 1.6;
//         }
//     } else if (city === "Plovdiv") {
//         if (product === "coffee") {
//             price = quantity * 0.4;        
//         } else if (product === "water") {
//             price = quantity * 0.7;
//         } else if (product === "beer") {
//             price = quantity * 1.15;
//         } else if (product === "sweets") {
//             price = quantity * 1.30;
//         } else if (product === "peanuts") {
//             price = quantity * 1.50;
//         }
//     } else if (city === "Varna") {
//         if (product === "coffee") {
//             price = quantity * 0.45;        
//         } else if (product === "water") {
//             price = quantity * 0.70;
//         } else if (product === "beer") {
//             price = quantity * 1.10;
//         } else if (product === "sweets") {
//             price = quantity * 1.35;
//         } else if (product === "peanuts") {
//             price = quantity * 1.55;
//         }
//     }   
//     console.log(price.toFixed(4));
// }


function solve(product, city, quantity) {
    quantity = Number(quantity);

    let price = 0;

    if (city === "Sofia") {
        switch (product) {
            case "coffee":
                price = 0.5;
                break;
            case "water":
                price = 0.8;
                break;
            case "beer":
                price = 1.2;
                break;
            case "sweets":
                price = 1.45;
                break;
            case "peanuts":
                price = 1.6;
                break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case "coffee":
                price = 0.4;
                break;
            case "water":
                price = 0.7;
                break;
            case "beer":
                price = 1.15;
                break;
            case "sweets":
                price = 1.30;
                break;
            case "peanuts":
                price = 1.5;
                break;
        }

    } else if (city === "Varna") {
        switch (product) {
            case "coffee":
                price = 0.45;
                break;
            case "water":
                price = 0.7;
                break;
            case "beer":
                price = 1.10;
                break;
            case "sweets":
                price = 1.35;
                break;
            case "peanuts":
                price = 1.55;
                break;
        }
    }
    
    console.log(price * quantity);
}

solve("coffee", "Varna", "2");
solve("peanuts", "Plovdiv", "1");
solve("beer", "Sofia", "6");
solve("water", "Plovdiv", "3");
solve("sweets", "Sofia", "2.23");
