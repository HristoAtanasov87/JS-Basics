function solve(input) {
    let food = Number(input[0]) * 1000;
    let currentFood = 0;

    let index = 1;
    let command = input[index];
    
    while (command !== "Adopted") {
        currentFood += Number(command);
        
        index++;
        command = input[index];
    }

    let leftovers = food - currentFood;
    if (currentFood <= food) {
        console.log(`Food is enough! Leftovers: ${leftovers} grams.`);
    } else {
        console.log(`Food is not enough. You need ${Math.abs(leftovers)} grams more.`);
    }
}

solve([4,
    130,
    345,
    400,
    180,
    230,
    120,
    "Adopted"
    ])