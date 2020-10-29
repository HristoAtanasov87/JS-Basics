function solve(bees, flowers) {
    bees = Number(bees);
    flowers = Number(flowers);

    let result = bees * flowers * 0.21;
    let remaining = result / 100;
    let honeyRemaining = result - (Math.floor(remaining) * 100);

    console.log(`${Math.floor(remaining)} honeycombs filled.`);
    console.log(`${honeyRemaining.toFixed(2)} grams of honey left.`);
}

solve("11", "120");
