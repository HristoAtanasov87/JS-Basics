function solve(chrysanthemum, roses, tulips, season, holiday) {
    chrysanthemum = Number(chrysanthemum);
    roses = Number(roses);
    tulips = Number(tulips);

    let priceChrysanthemum = 0;
    let priceRoses = 0;
    let priceTulips = 0;
    let discount1 = 0;
    let discount2 = 0;
    let discount3 = 0;

    switch (season) {
        case "Spring":
            if (holiday === "Y") {
                priceChrysanthemum = 2 * 1.15;
                priceRoses = 4.1 * 1.15;
                priceTulips = 2.5 * 1.15;
                if (tulips >= 7) {
                    discount1 = 0.05;
                }
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }                
            } else {
                priceChrysanthemum = 2;
                priceRoses = 4.1;
                priceTulips = 2.5;
                if (tulips >= 7) {
                    discount1 = 0.05;
                }
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }
            }
            break;
        case "Summer":
            if (holiday === "Y") {
                priceChrysanthemum = 2 * 1.15;
                priceRoses = 4.1 * 1.15;
                priceTulips = 2.5 * 1.15;
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }            
            } else {
                priceChrysanthemum = 2;
                priceRoses = 4.1;
                priceTulips = 2.5;
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }
            }
            break;
        case "Autumn":
            if (holiday === "Y") {
                priceChrysanthemum = 3.75 * 1.15;
                priceRoses = 4.5 * 1.15;
                priceTulips = 4.15 * 1.15;
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }            
            } else {
                priceChrysanthemum = 3.75;
                priceRoses = 4.5;
                priceTulips = 4.15;
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }
            }
            break;
        case "Winter":
            if (holiday === "Y") {
                priceChrysanthemum = 3.75 * 1.15;
                priceRoses = 4.5 * 1.15;
                priceTulips = 4.15 * 1.15;
                if (roses >= 10) {
                    discount3 = 0.1;
                }
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }            
            } else {
                priceChrysanthemum = 3.75;
                priceRoses = 4.5;
                priceTulips = 4.15;
                if (roses >= 10) {
                    discount3 = 0.1;
                }
                if (chrysanthemum + roses + tulips > 20) {
                    discount2 = 0.2;
                }
            }
            break;    
    }

    let result = (chrysanthemum * priceChrysanthemum) + (roses * priceRoses) + (tulips * priceTulips);
    
    let mid1 = result - (result * discount1);
    let mid2 = mid1 - (mid1 * discount3);
    let final = mid2 - (mid2 * discount2) + 2;


    console.log(final.toFixed(2)); 
}

solve("3", "10", "9", "Winter", "N");