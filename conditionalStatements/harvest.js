function solve(area, grapesPerMeter, liters, workers) {
    area = Number(area);
    grapesPerMeter = Number(grapesPerMeter);
    liters = Number(liters);
    workers = Number(workers);

    let wineArea = 0.4 * area;
    let harvest = wineArea * grapesPerMeter;
    let wine = harvest / 2.5;

    if (wine < liters) {
        console.log(`It will be a tough winter! More ${Math.floor(liters - wine)} liters wine needed.`)
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - liters)} liters left -> ${Math.ceil(Math.ceil(wine - liters) / workers)} liters per person.`);
    }
}

solve("1020", "1.5", "425", "4");