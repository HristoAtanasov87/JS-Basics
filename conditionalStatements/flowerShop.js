function solve(magn, zumb, roses, cactus, present) {
    magn = Number(magn);
    zumb = Number(zumb);
    roses = Number(roses);
    cactus = Number(cactus);
    present = Number(present);

    let earnings = magn * 3.25 + zumb * 4 + roses * 3.5 + cactus * 8;
    let remaining = earnings * 0.95;

    if (remaining < present) {
        console.log(`She will have to borrow ${Math.ceil(present - remaining)} leva.`);        
    } else {
        console.log(`She is left with ${Math.floor(remaining - present)} leva.`);
    }
}

solve("15", "7", "5", "10", "100");