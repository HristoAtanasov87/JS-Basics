function solve(input) {
    let budget = Number(input[0]);
    let isEnough = true;

    let index = 1;
    let command = input[index];
    let salary15 = 0;

    while (command !== "ACTION") {
        if (command.length > 15) {
            salary15 = budget * 0.2;
            budget -= salary15;
            index++;
            command = input[index];
            continue;            
        }

        index++;
        let salary = Number(input[index]);
        budget -= salary;
        if (budget < 0) {
            isEnough = false;
            break;
        }

        index++;
        command = input[index];
    }

    if (isEnough) {
        console.log(`We are left with ${budget.toFixed(2)} leva.`);
    } else {
        console.log(`We need ${(Math.abs(budget)).toFixed(2)} leva for our actors.`);
    }
}

// solve(["90000", "Christian Bale", "70000.50", "Leonardo DiCaprio", "Kevin Spacey", "24000.99"]);
solve(["170000", "Ben Affleck", "40000.50", "Zahari Baharov", "80000", "Tom Hanks", "2000.99", "ACTION"]);