function solve(flowerType, flowerNumber, season) {
    flowerNumber = Number(flowerNumber);

    switch (flowerType) {
        case "Sunflower":
            if (season === "Spring") {
                kilos = 10;
            } else if (season === "Summer") {
                kilos = 8 * 1.1;
            } else {
                kilos = 12 * 0.95;
            }
            break;
        case "Daisy":
            if (season === "Spring") {
                kilos = 12 * 1.1;
            } else if (season === "Summer") {
                kilos = 8 * 1.1;
            } else {
                kilos = 6 * 0.95;
            }
            break;
        case "Lavender":
            if (season === "Spring") {
                kilos = 12;
            } else if (season === "Summer") {
                kilos = 8 * 1.1;
            } else {
                kilos = 6 * 0.95;
            }
            break;
        case "Mint":
            if (season === "Spring") {
                kilos = 10 * 1.1;
            } else if (season === "Summer") {
                kilos = 12 * 1.1;
            } else {
                kilos = 6 * 0.95;
            }
            break;
    }
    console.log(`Total honey harvested: ${(kilos * flowerNumber).toFixed(2)}`)
}

solve("Daisy", "15", "Spring");