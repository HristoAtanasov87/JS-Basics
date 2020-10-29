function solve(budget, actors, clothesPrice) {
    budget = Number(budget);
    actors = Number(actors);
    clothesPrice = Number(clothesPrice);

    let decoration = budget * 0.1;
    let clothingExpences;
    
    if (actors >= 150) {
        clothingExpences = actors * clothesPrice * 0.9;
    } else {
        clothingExpences = actors * clothesPrice;
    }
    
    let totalExpences = decoration + clothingExpences;
    let moneyLeft = budget - totalExpences;
    let moneyNeeded = totalExpences - budget;

    if (totalExpences <= budget) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`)
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`)
    }
}

// solve("20000", "120", "55.5");
// solve("15437.62", "186", "57.99");
solve("9587.88", "222", "55.68");