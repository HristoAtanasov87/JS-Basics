function solve(input) {

    let guests = Number(input[0]);
    let budget = Number(input[1]);

    let cakes = Math.ceil(guests / 3);
    let eggs = guests * 2;

    let cakePrice = cakes * 4;
    let eggsPrice = eggs * 0.45;

    let total = cakePrice + eggsPrice;
    

    if (total <= budget) {
        console.log(`Lyubo bought ${cakes} Easter bread and ${eggs} eggs.`);
        console.log(`He has ${(budget - total).toFixed(2)} lv. left.`);
    } else {
        console.log(`Lyubo doesn't have enough money.`);
        console.log(`He needs ${(total - budget).toFixed(2)} lv. more.`);
    }
}

solve(["9", "12"]);