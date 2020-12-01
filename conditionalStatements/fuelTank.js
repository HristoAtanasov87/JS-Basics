function solve(fuel, liters) {
    
    liters = Number(liters);

    switch (fuel) {
        case "Diesel":
            if (liters < 25) {
                console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
            } else {
                console.log(`You have enough ${fuel.toLowerCase()}.`);
            }
            break;
        case "Gasoline":
            if (liters < 25) {
                console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
            } else {
                console.log(`You have enough ${fuel.toLowerCase()}.`);
            }
            break;
        case "Gas":
            if (liters < 25) {
                console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
            } else {
                console.log(`You have enough ${fuel.toLowerCase()}.`);
            }
            break;
        default:
            console.log("Invalid fuel!");
            break;
    }
}

solve("Diesel", "10");