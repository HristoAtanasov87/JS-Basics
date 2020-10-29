function solve(input) {
    let budget = Number(input[0]);
    let gpu = Number(input[1]);
    let cpu = Number(input[2]);
    let ram = Number(input[3]);

    let gpuPrice = 250;
    let cpuPrice = gpu * gpuPrice * 0.35;
    let ramPrice = 0.1 * gpu * gpuPrice;

    let total = (gpu * gpuPrice) + (cpu * cpuPrice) + (ram * ramPrice);

    if (gpu > cpu) {
        total = total * 0.85;
    }

    if (budget >= total) {
        console.log(`You have ${(budget - total).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(total - budget).toFixed(2)} leva more!`);
    }

}

solve(['900', '2', '1', '3']);