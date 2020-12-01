function solve(volume, p1, p2, hours) {
    volume = Number(volume);
    p1 = Number(p1);
    p2 = Number(p2);
    hours = Number(hours);

    let volumeFilled = (p1 * hours) + (p2 * hours);

    if (volumeFilled <= volume) {
        console.log(`The pool is ${(volumeFilled / volume * 100).toFixed(2)}% full. Pipe 1: ${(p1 * hours / volumeFilled * 100).toFixed(2)}%. Pipe 2: ${(p2 * hours / volumeFilled * 100).toFixed(2)}%`);
    } else {
        console.log(`For ${hours} hours the pool overflows with ${(volumeFilled - volume).toFixed(2)} liters.`);
    }
}

solve("1000", "100", "120", "3");