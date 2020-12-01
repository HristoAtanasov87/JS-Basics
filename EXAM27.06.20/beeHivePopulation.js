function solve(startBees, years) {
    startBees = Number(startBees);
    years = Number(years);
    let population = startBees;

    for (let i = 1; i <= years; i++) {
        population += Math.floor(population / 10) * 2;
        
        if (i % 5 === 0) {
            population -= Math.floor(population / 50) * 5;
        }

        population -= Math.floor(population / 20) * 2;
    }
    console.log(`Beehive population: ${population}`);
}

solve("100", "6");