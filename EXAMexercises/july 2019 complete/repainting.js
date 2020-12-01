function solve(input) {
    let plastic = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let workingHours = Number(input[3]);

    let plasticPrice = (plastic * 1.5) + 3;
    let paintPrice = (paint * 14.5) + (paint * 0.1 * 14.5);
    let thinnerPrice = thinner * 5;
    let totalExpences = plasticPrice + paintPrice + thinnerPrice + 0.4;
    let workFee = 0.3 * totalExpences * workingHours;

    let result = totalExpences + workFee;

    console.log(`Total expenses: ${result.toFixed(2)} lv.`);
}

solve(['10', '11', '4', '8']);