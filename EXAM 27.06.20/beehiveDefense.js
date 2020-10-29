function solve(bees, bearHealth, bearAttack) {
    bees = Number(bees);
    bearHealth = Number(bearHealth);
    bearAttack = Number(bearAttack);
    let beeAttack = 5;
    let bearWon = false;
    
    while (bearHealth !== 0) {
        if (bearAttack > bees) {
            bearWon = true;
            bees = 0;
            break;
        }

        bees -= bearAttack;

        if (bees < 100) {
            bearWon = true;
            break;
        }
        
        bearHealth -= bees * beeAttack;
        
        if (bearHealth < 0) {
            break;
        }
    }

    if (bearWon) {
        console.log(`The bear stole the honey! Bees left ${bees}.`);
    } else {
        console.log(`Beehive won! Bees left ${bees}.`);
    }
}

solve("200", "10000", "300");